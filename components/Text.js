import React from 'react';
import {Text, StyleSheet} from 'react-native';

const StyledText = ({children, style, ...rest}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
  },
});

export default StyledText;
