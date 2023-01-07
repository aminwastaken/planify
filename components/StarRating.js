import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const StarRating = ({rating, style, max, size}) => {
  const stars = [];
  const maxRating = 5;
  if (max) maxRating = max;
  if (rating) {
    const intRating = Math.floor(rating);
    for (let i = 0; i < intRating; i++) {
      stars.push(<Icon name="star" key={i} style={styles.iconSelected} />);
    }
    for (let i = 0; i < maxRating - intRating; i++) {
      stars.push(
        <Icon name="star" key={i + 1000} style={styles.iconUnselected} />,
      );
    }
  } else {
    for (let i = 0; i < maxRating; i++) {
      stars.push(<Icon name="star" key={i} style={styles.iconUnselected} />);
    }
  }

  return <View style={[styles.mainContainer, style]}>{stars}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  iconSelected: {color: '#F5BE18'},
  iconUnselected: {color: 'grey'},
});

export default StarRating;
