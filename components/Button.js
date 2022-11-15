import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({children, onPress, style, textStyle, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...props}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 7.56,
    margin: 10,
  },

  buttonText: {
    color: '#FFFFFF',
  },
});

export default Button;
