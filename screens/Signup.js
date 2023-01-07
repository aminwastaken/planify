import React, {useState, useContext, useEffect} from 'react';

import {View, StyleSheet, ScrollView, Text} from 'react-native';
import ProfileForm from '../components/ProfileForm';
import Button from '../components/Button';
import GlobalContext from '../GlobalContext';
import ActivityBooked from './ActivityBooked';
import SuccessView from '../components/SuccessView';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {token, setToken} = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setPhone('');
    setErrorMessage(undefined);
    setSubmitted(false);
  };

  const handleSignup = async () => {
    console.log('signup');
    setLoading(true);
    try {
      const response = await fetch(global.apiUrl + 'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          role: 'USER',
        }),
      });
      console.log(response.status);
      const data = await response.text();
      if (response.status === 400) {
        setErrorMessage('One or more fields are not valid');
        return;
      }
      if (response.status === 401) {
        setErrorMessage('A user with this email already address exists');
        return;
      } else if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
      } else {
        setErrorMessage('Server error');
        return;
      }
    } catch (error) {}
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
        title="Account created"
        text="Your account has been created succesfully, please verify your email address before login in"
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
          <Text style={styles.title}>Create your</Text>
          <Text style={styles.title}>Account</Text>
        </View>
        <ProfileForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          phone={phone}
          setPhone={setPhone}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
          style={styles.profileForm}
        />
        <Button style={styles.button} onPress={handleSignup}>
          Sign up
        </Button>
        <View style={styles.loginMessage}>
          <Text style={styles.subTitle}>Already have an account? </Text>
          <Text
            style={styles.link}
            onPress={() => {
              resetForm();
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },

  titleContainer: {
    marginLeft: 10,
  },

  profileForm: {
    marginTop: 20,
    marginBottom: 40,
  },

  link: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 15,
  },
  loginMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  errorMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },

  errorMessage: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Signup;
