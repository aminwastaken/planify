import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import GlobalContext from '../GlobalContext';
import HorizontalCardList from '../components/HorizontalCardList';
import {upcomingActivities} from '../data/destinations';

const Trips = ({navigation, children}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [trips, setTrips] = useState([]);

  console.log('this is the token', token);

  const getTrips = async () => {
    try {
      const response = await fetch(global.apiUrl + 'trips', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });

      const data = await response.json();
      console.log('these are the trips', data);
      setTrips(
        data.map(trip => {
          return {
            id: trip.id,
            title: trip.name,
            image:
              trip.activities && trip.activities.length > 0
                ? trip.activities[0].image
                  ? trip.activities[0].image
                  : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg'
                : '',
            subtitle:
              trip.activities.length +
              (trip.activities.length === 1 ? ' activity' : ' activities'),
            footerText: 'footer', // total cost
            onPress: () => {
              console.log('clicked');
              console.log('this is the trip.id', trip.id);
              navigation.navigate('Trip', {id: trip.id});
            },
          };
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Trips</Text>
        </View>
        <View style={styles.content}>
          <HorizontalCardList data={trips} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollView: {
    marginLeft: 25,
    marginTop: 35,
    flex: 1,
  },
  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  titleArea: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
});

export default Trips;
