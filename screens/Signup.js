import React, {useState} from 'react';

import {View, StyleSheet, ScrollView, Text} from 'react-native';
import ProfileForm from '../components/ProfileForm';
import Button from '../components/Button';
import {set} from 'react-native-reanimated';
const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
          phoneNumber: phone,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        console.log(data.error);
        setLoading(false);
      } else {
        console.log(data);
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
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
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </View>
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
});
export default Signup;
