import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const EmptyStars = ({}) => {
  const numberOfStars = 5;
  return (
    <View style={styles.mainContainer}>
      {Array(numberOfStars)
        .fill()
        .map((_, index) => {
          return <Icon name="staro" key={index} style={styles.star} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 10,
  },
  star: {
    fontSize: 30,
  },
});

export default EmptyStars;
