import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ActivityBooked = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Activity Booked</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            You have successfully booked the activity.
          </Text>
          <Image
            source={require('../assets/images/success-icon.png')}
            style={styles.image}
          />
        </View>
      </View>
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
