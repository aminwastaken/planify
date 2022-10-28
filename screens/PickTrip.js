import React from 'react';
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

const trips = [
  {
    id: '1',
    title: 'my trip to paris',
    location: 'paris',
    imageLink:
      'https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_77884/node_77888/cath%C3%A9drale-notre-dame-de-paris-vue-depuis-le-parvis-%7C-630x405-%7C-%C2%A9-leiflinding/11884072-6-fre-FR/Cath%C3%A9drale-Notre-Dame-de-Paris-Vue-depuis-le-parvis-%7C-630x405-%7C-%C2%A9-LeifLinding.jpg',
  },
  {
    id: '2',
    title: 'my trip to rouen',
    location: 'paris',
    imageLink: 'https://media.routard.com/image/81/8/fb-rouen.1552818.jpg',
  },
];
const PickTrip = ({navigation}) => {
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
                navigation.navigate('newTrip');
              }}>
              New Trip
            </Button>
          </View>

          {trips.map(trip => (
            <TripCard
              key={trip.id}
              title={trip.title}
              location={trip.location}
              imageLink={trip.imageLink}
              style={styles.tripCard}
              navigation={navigation}
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
