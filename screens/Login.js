import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import LoginForm from '../components/LoginForm';
import Button from '../components/Button';
import GlobalContext from '../GlobalContext';

const Login = ({navigation, ...props}) => {
  const {token, setToken, userLocation} = useContext(GlobalContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const login = async () => {
    try {
      const response = await fetch(global.apiUrl + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log('this is the login data', data);
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
          <Text style={styles.title}>Login to your</Text>
          <Text style={styles.title}>Account</Text>
        </View>
        <LoginForm
          style={styles.loginForm}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />

        <Button style={styles.button} onPress={() => login()}>
          Login
        </Button>
        <View style={styles.signupMessage}>
          <Text style={styles.subTitle}>Don't have an account? </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Signup')}>
            Signup
          </Text>
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
});
export default Login;
