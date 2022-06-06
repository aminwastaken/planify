import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const EventCard = ({imageLink, title, startDate, location, style}) => {
  return (
    <TouchableOpacity style={[style, styles.mainContainer]}>
      <Image style={styles.image} source={{uri: imageLink}} />

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{startDate}</Text>
        </View>
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
    justifyContent: 'space-between',
  },

  title: {
    marginTop: 5,
    color: '#000',
    fontWeight: '700',
  },

  date: {
    color: '#000',
  },
});

export default EventCard;
