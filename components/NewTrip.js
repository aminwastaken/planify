import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {TextInput} from 'react-native-paper';
import Button from '../components/Button';
// import na

const NewTrip = ({navigation}) => {
  console.log('navigation', navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give your trip a name</Text>
      <TextInput style={styles.input} placeholder="Trip Name" />
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, styles.secondaryButton]}
          textStyle={styles.buttonText}
          onPress={() => {
            navigation.goBack();
          }}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}>
          Save
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent',
  },

  button: {
    width: 130,
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#007AFF',
  },
});

export default NewTrip;
