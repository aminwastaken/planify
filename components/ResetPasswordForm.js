import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const ResetPasswordForm = ({style, email, setEmail}) => {
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

export default ResetPasswordForm;
