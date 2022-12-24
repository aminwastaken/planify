import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RatingDetails from './RatingDetails';
import StarRating from './StarRating';

const RatingCard = ({reviews}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.globalRating}>
        <Text style={styles.globalRatingText}>4.6</Text>
        <StarRating rating={4.6} size={36} />
        <Text> 12 reviews</Text>
      </View>
      <RatingDetails
        data={[
          {
            rating: 5,
            value: 4.5,
          },
          {
            rating: 4,
            value: 4,
          },
          {
            rating: 3,
            value: 1,
          },
          {
            rating: 2,
            value: 0,
          },
          {
            rating: 1,
            value: 0,
          },
        ]}
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
    marginBottom: 200,
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
