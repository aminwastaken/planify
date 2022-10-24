import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import LoginForm from '../components/LoginForm';
import Button from '../components/Button';

const Login = ({navigation, ...props}) => {
  const {token, setToken} = props.route.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login to your</Text>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.subTitle}>Token is : {global.token}</Text>
      </View>
      <LoginForm style={styles.loginForm} />

      <Button
        style={styles.button}
        onPress={() => {
          // navigation.navigate('Signup');
          setToken('mfthisisatoken');
        }}>
        Login
      </Button>
      <View style={styles.signupMessage}>
        <Text style={styles.subTitle}>Don't have an account? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
          Signup
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
});
export default Login;
