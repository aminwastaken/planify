import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import Button from './Button';
import GlobalContext from '../GlobalContext';
import {launchImageLibrary} from 'react-native-image-picker';

const createFormData = photo => {
  const data = new FormData();

  data.append('images', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  return data;
};

const ProfileEditForm = ({data, navigation, style, setErrorMessage}) => {
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
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log('photo response', response);
      if (response && response.assets && response.assets[0]) {
        fetch(global.apiUrl + 'users/' + userId, {
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + token,
          },
          body: createFormData(response.assets[0]),
        })
          .then(response => response.json())
          .then(response => {
            console.log('photo response', response);
            navigation.goBack();
          })
          .catch(error => {
            console.log('error', error);
          });
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(global.apiUrl + 'users/' + userId, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: createFormData(photo),
    })
      .then(response => response.json())
      .then(response => {
        console.log('photo response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
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
    console.log('response from the saveProfile', response);
    console.log('response error', response.error);
    console.log('---------------------');
    if (response.error) {
      console.log('this is the error', response.error);
      if (
        response.message &&
        Array.isArray(response.message) &&
        response.message.length > 0
      ) {
        console.log('this is the error message', response.message[0]);
        setErrorMessage(response.message[0]);
      } else if (response.message && typeof response.message === 'string') {
        setErrorMessage(response.message);
      } else {
        setErrorMessage('Something went wrong');
      }
    }
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
        user
        review
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
        Save profile
      </Button>
      <View>
        {photo && (
          <>
            <Image
              source={{uri: photo.uri}}
              style={{width: 300, height: 300}}
            />
            <Button onPress={handleUploadPhoto}> Upload photo </Button>
          </>
        )}
        <Button style={styles.button} onPress={handleChoosePhoto}>
          Choose Photo
        </Button>
      </View>
      <TextInput
        style={styles.input}
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
