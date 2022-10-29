import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const ProfileForm = ({style, email, password, setEmail, setPassword}) => {
  const [date, setDate] = useState(new Date('09-10-2000'));
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [open, setOpen] = useState(false);
  return (
    <View style={{...styles.mainContainer, ...style}}>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={email}
        label="Email"
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}

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
