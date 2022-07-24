import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const TripCard = ({imageLink, title, location, style, navigation}) => {
  return (
    <TouchableOpacity
      style={[style, styles.mainContainer]}
      onPress={() => {
        navigation.navigate('ActivityBooked');
      }}>
      <Image style={styles.image} source={{uri: imageLink}} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
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
    justifyContent: 'center',
  },

  title: {
    marginTop: 5,
    marginBottom: 2,
    color: '#000',
    fontWeight: '700',
  },
  location: {
    marginTop: 2,
    marginBottom: 5,
  },
});

export default TripCard;
