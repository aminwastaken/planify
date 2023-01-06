import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const ProfileForm = ({
  style,
  email,
  setEmail,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  setError,
  loading,
  setLoading,
}) => {
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
        type="password"
        secureTextEntry={true}
        underlineColor="#707070"
        activeUnderlineColor="#707070"
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
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

      <DatePicker
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
