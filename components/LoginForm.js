import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

const ProfileForm = ({style, email, password, setEmail, setPassword}) => {
  return (
    <View style={{...styles.mainContainer, ...style}}>
      <TextInput
        style={styles.input}
        value={email}
        label="Email"
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        type="password"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 40,
    marginLeft: 10,
  },
  input: {
    backgroundColor: 'transparent',
  },
  submitButton: {
    marginTop: 40,
    backgroundColor: '#007AFF',
  },
  birthdayInput: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingLeft: 11,
    paddingBottom: 15,
  },
  birthdayInputText: {
    fontSize: 16,
    color: '#707070',
  },
});

export default ProfileForm;
