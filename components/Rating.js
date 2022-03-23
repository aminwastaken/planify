import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Text from './Text';

const Rating = ({style, rating}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Icon name="star" color="#FFCC00" size={32} />
      <Text style={styles.ratingText}>
        <Text style={styles.rating}>{rating}</Text> Rating
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {alignItems: 'center'},
  ratingText: {
    color: '#FFF',
    marginTop: 2,
  },
  rating: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Rating;
