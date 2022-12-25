import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getFormattedDate} from '../utils/format';
import StarRating from './StarRating';

const UserReviewCard = ({review, date, rating, username, style}) => {
  console.log('user reviews called');
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://storage.needpix.com/rsynced_images/avatar-1577909_1280.png',
          }}
          style={styles.avatar}
        />

        <Text style={styles.userName}>{username}</Text>
      </View>
      <View style={styles.starContainer}>
        <StarRating
          style={styles.starRating}
          rating={parseFloat(rating)}
          size={36}
        />
        <Text style={[styles.text]}>{getFormattedDate(date)}</Text>
      </View>
      <Text style={styles.comment}>{review}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {marginBottom: 20},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {width: 40, height: 40, borderRadius: 50, marginRight: 13},
  userName: {color: '#000'},
  starRating: {
    marginRight: 7,
  },
  starContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {},
});

export default UserReviewCard;
