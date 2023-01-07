import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const StarsInput = ({value, onChange, style}) => {
  const numberOfStars = 5;
  return (
    <View style={[styles.mainContainer, style]}>
      {Array(numberOfStars)
        .fill()
        .map((_, index) => {
          return index >= value ? (
            <Icon
              name="staro"
              key={index}
              style={styles.star}
              onPress={() => onChange(index + 1)}
            />
          ) : (
            <Icon
              name="star"
              key={index}
              style={styles.fileldStar}
              onPress={() => onChange(index + 1)}
            />
          );
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
  fileldStar: {
    fontSize: 30,
    color: '#FFC107',
  },
});

export default StarsInput;
