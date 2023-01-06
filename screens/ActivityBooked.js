import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import SuccessView from '../components/SuccessView';

const ActivityBooked = ({navigation}) => {
  const goHome = () => navigation.navigate('home');
  return (
    <View style={styles.mainContainer}>
      <SuccessView
        title="Activity Booked"
        text="Your activity has been booked successfully"
        action={goHome}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollView: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 35,
    flex: 1,
  },

  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },

  titleArea: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
});

export default ActivityBooked;
