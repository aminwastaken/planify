import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {TextInput} from 'react-native-paper';

const NewTrip = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give your trip a name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },
  input: {
    backgroundColor: 'transparent',
  },
});

export default NewTrip;
