import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RatingDetails from './RatingDetails';
import StarRating from './StarRating';

const RatingCard = ({rating, totalReviews, ratingDetails, ratingAverage}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.globalRating}>
        <Text style={styles.globalRatingText}>{ratingAverage?.toFixed(1)}</Text>
        <StarRating rating={ratingAverage} size={36} />
        <Text> {totalReviews} reviews</Text>
      </View>
      <RatingDetails
        data={ratingDetails}
        total={totalReviews}
        style={styles.ratingDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  globalRating: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 20,
    // backgroundColor: 'red',
    margin: 10,
    marginRight: 20,
  },

  globalRatingText: {
    fontSize: 36,
    fontWeight: '500',
    color: '#000',
  },

  ratingDetails: {
    width: '80%',
    paddingRight: 20,
  },
});

export default RatingCard;
