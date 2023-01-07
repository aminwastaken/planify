import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import LoginForm from '../components/LoginForm';
import Button from '../components/Button';
import GlobalContext from '../GlobalContext';
import ResetPasswordForm from '../components/ResetPasswordForm';
import SuccessView from '../components/SuccessView';

const ResetPassword = ({navigation, ...props}) => {
  const {token, setToken, userLocation} = useContext(GlobalContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const resetForm = () => {
    setEmail('');
    setErrorMessage(undefined);
    setSubmitted(false);
  };

  const login = async () => {
    console.log('this is the email', email);
    try {
      const response = await fetch(global.apiUrl + 'forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
      } else if (response.status === 400) {
        setErrorMessage('Email address not valid.');
      } else if (response.status === 404) {
        setErrorMessage('User not found.');
      } else {
        setErrorMessage('Something went wrong');
      }

      console.log('this is the response', response);
      const data = await response.text();
      console.log('this is the login data', data);
      console.log('this is the status code', response.status);
      if (data.error) {
        if (
          data.message &&
          Array.isArray(data.message) &&
          data.message.length > 0
        ) {
          console.log('this is the error message', data.message[0]);
          setErrorMessage(data.message[0]);
        } else if (data.message && typeof data.message === 'string') {
          setErrorMessage(data.message);
        } else {
          setErrorMessage('Something went wrong');
        }
      }
      setToken(data.access_token);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetForm();
    });
    return unsubscribe;
  }, [navigation]);

  if (submitted) {
    return (
      <SuccessView
        title="Password reset"
        text="Your password has been reset. Please check your email for further instructions."
        action={() => {
          resetForm();
          navigation.navigate('Login');
        }}
        buttonValue="Go to login page"
      />
    );
  }

  return (
    <>
      <View
        style={[
          styles.errorMessageContainer,
          {
            backgroundColor: errorMessage && errorMessage != '' && '#FD4640',
          },
        ]}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Reset your password</Text>
          {/* <Text style={styles.title}>to reset your password</Text> */}
        </View>
        <ResetPasswordForm
          style={styles.loginForm}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <Button style={styles.button} onPress={() => login()}>
          Reset password
        </Button>
        <View style={styles.lostPswMessage}>
          <Text style={styles.subTitle}>You can always go back to the </Text>
          <Text
            style={styles.link}
            onPress={() => {
              resetForm();
              navigation.navigate('Login');
            }}>
            login
          </Text>
          <Text style={styles.subTitle}>page</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },

  titleContainer: {
    marginLeft: 10,
  },

  loginForm: {
    marginTop: 20,
    marginBottom: 40,
  },

  link: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 15,
  },
  signupMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  lostPswMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },

  errorMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
    position: 'absolute',
    top: 0,
  },

  errorMessage: {
    color: '#fff',
    fontSize: 18,
  },

  subTitle: {
    marginLeft: 3.5,
  },
});
export default ResetPassword;
