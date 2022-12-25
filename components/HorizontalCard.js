import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const HorizontalCard = ({
  imageLink,
  title,
  subtitle,
  subtitle2,
  footerText,
  style,
  onPress,
}) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  console.log('Subtitle 1 :', subtitle);
  return (
    <TouchableOpacity style={[style, styles.mainContainer]} onPress={onPress}>
      <Image style={styles.image} source={{uri: imageLink}} />

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.text}>{subtitle}</Text>}
          {subtitle2 && <Text style={styles.text}>{subtitle2}</Text>}
        </View>
        <Text style={styles.footerText}>{footerText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginRight: 15,
  },
  textContainer: {
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
  },

  title: {
    marginTop: 5,
    color: '#000',
    fontWeight: '700',
  },

  text: {
    color: '#000',
  },
});

export default HorizontalCard;
