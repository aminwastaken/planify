import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import ProfileForm from '../components/ProfileForm';
import Button from '../components/Button';
const Signup = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create your</Text>
        <Text style={styles.title}>Account</Text>
      </View>
      <ProfileForm style={styles.profileForm} />

      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate('pickTrip');
        }}>
        Sign up
      </Button>
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
});
export default Signup;
