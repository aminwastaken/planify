import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import Button from './Button';
import GlobalContext from '../GlobalContext';

const ProfileEditForm = ({data, navigation, style}) => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [userId, setUserId] = useState();
  const {token, setToken} = useContext(GlobalContext);

  const reloadScreen = () => {
    console.log('reload screen');
  };

  useEffect(() => {
    console.log('data from the useEffect: ', data);
    setUserId(data.id);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setPhone(data.phone);
  }, [data]);

  const updateUserInfo = async (id, data) => {
    console.log('put data', data);
    console.log('id is ', id);
    try {
      const response = await fetch(global.apiUrl + 'users/' + id, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const user = await response.json();
      console.log('pu request response', user);
      if (user.error) console.log(user);
      return user;
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const saveProfile = async () => {
    console.log('saving the profile');
    const data = {};
    if (firstName) data.firstName = firstName;
    if (lastName) data.lastName = lastName;
    if (email) data.email = email;
    if (phone) data.phoneNumber = phone;

    const response = await updateUserInfo(userId, data);
    // reload screen
    console.log('go back and reload the screen');
    navigation.goBack();
  };

  return (
    <View style={{...styles.mainContainer, ...style}}>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="Email Address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="Phone number"
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      <Button style={styles.button} onPress={saveProfile}>
        {' '}
        Save profile{' '}
      </Button>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="Old Password"
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        type="flat"
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="New Password"
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <Button style={styles.button}> Change password </Button>
      {/* <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.birthdayInput}>
          <Text style={styles.birthdayInputText}>
            {day && month && year
              ? `${day} / ${month} / ${year}`
              : 'DD / MM / YYYY'}
          </Text>
        </View>
      </TouchableOpacity> */}

      {/* <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => console.log('Pressed')}>
        Save
      </Button> */}

      {/* <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        value={date}
        maximumDate={new Date('2010-12-31')}
        minimumDate={new Date('1910-01-01')}
        onConfirm={date => {
          setOpen(false);
          let day = date.getDate().toString();
          let month = date.getMonth().toString();
          const year = date.getFullYear().toString();
          if (day.length === 1) {
            day = '0' + day;
          }
          if (month.length === 1) {
            month = '0' + month;
          }
          setDay(day);
          setMonth(month);
          setYear(year);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}
      {errors.map((error, index) => {
        return <Text key={index}>{error}</Text>;
      })}
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
  button: {
    marginTop: 30,
  },
});

export default ProfileEditForm;
