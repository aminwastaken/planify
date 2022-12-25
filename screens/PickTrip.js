import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../components/Button';
import TripCard from '../components/TripCard';
import GlobalContext from '../GlobalContext';

const PickTrip = ({navigation, route}) => {
  const [trips, setTrips] = useState([]);
  const {token, setToken} = useContext(GlobalContext);

  console.log('route', route);

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
      console.log('these are the trips (pick a trip)', data);
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
                : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
            subtitle: trip.activities.length + ' activities',
            footerText: 'footer', // total cost
            onPress: async () => {
              try {
                const response = await fetch(
                  global.apiUrl + 'trips/' + trip.id + '/activities',
                  {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                      Authorization: 'Bearer ' + token,
                    },
                    body: JSON.stringify({
                      activityId: route.params.activityId,
                    }),
                  },
                );

                const data = await response.json();
                console.log('data', data);
                navigation.navigate('ActivityBooked');
              } catch (error) {
                console.log('error', error);
              }
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
      <ScrollView>
        <View style={styles.previousIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Pick a trip</Text>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => {
                navigation.navigate('newTrip', {
                  activityId: route.params.activityId,
                });
              }}>
              New Trip
            </Button>
          </View>

          {trips.map(trip => (
            <TripCard
              key={trip.id}
              title={trip.title}
              subtitle={trip.subtitle}
              imageLink={trip.image ? trip.image : ''}
              style={styles.tripCard}
              navigation={navigation}
              onPress={trip.onPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 25,
    marginTop: 35,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    // marginBottom: 10,
  },
  previousIconContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    marginTop: 20,
  },

  button: {
    width: 150,
  },

  buttonContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tripCard: {
    marginBottom: 15,
  },
});

export default PickTrip;
