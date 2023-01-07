import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RatingDetails = ({data, total, style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      {data?.map((data, index) => {
        return (
          <View style={styles.ratingContainer}>
            <Text style={styles.text}>{data.rating}</Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progress,
                  {width: (parseFloat(data.value) * 100) / total + '%'},
                ]}></View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 5,
    borderRadius: 7,
    backgroundColor: 'grey',
  },
  progress: {
    height: 5,
    borderRadius: 7,
    backgroundColor: '#F5BE18',
  },
  text: {
    marginRight: 15,
  },
});

export default RatingDetails;
