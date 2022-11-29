import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useEffect, useState, useContext} from 'react';
import {notreDame, notreDamePhotos} from '../data/destinations';
import PageCover from '../components/PageCover';
import Text from '../components/Text';
import PhotosCarousel from '../components/PhotosCarousel';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GlobalContext from '../GlobalContext';
import EventCard from '../components/EventCard';

const Trip = ({navigation, route, id}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [trip, setTrip] = useState([]);
  const [activities, setActivities] = useState([]);

  console.log('this is the id', route.params.id);

  const getTrips = async () => {
    try {
      const response = await fetch(global.apiUrl + 'trips/' + route.params.id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });

      const data = await response.json();
      console.log('these are the trips', data);
      setTrip({
        id: data.id,
        title: data.name,
        image:
          data.activities && data.activities.length > 0
            ? data.activities[0].image
              ? data.activities[0].image
              : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg'
            : '',
        subtitle: data.activities.length + ' activities',
        footerText: 'footer', // total cost
        onPress: () => {
          console.log('clicked');
          navigation.navigate('Trip', {id: data.id});
        },
      });

      setActivities(
        data.activities.map(activity => {
          return {
            id: activity.id,
            image:
              activity.medias && activity.medias.length > 0
                ? activity.medias[0].url
                : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
            title: activity.name,
            subtitle: activity.date && activity.date,
            subtitle2: activity.date && 'time',
            footerText: activity.price && 'Price: ' + activity.price + '€',
            onPress: () => {
              console.log('clicked');
              navigation.navigate('Activity', {id: activity.id});
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
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <PageCover image={trip.image} title={trip.title} />
        <View style={styles.infoContainer}>
          <Text style={styles.subTitle}>Activities</Text>
          {activities?.map(item => (
            <EventCard
              key={item.id}
              imageLink={item.image}
              title={item.title}
              subtitle={item.subtitle}
              subtitle2={item.subtitle2}
              footerText={item.footerText}
              style={styles.eventCard}
              onPress={item.onPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  scrollView: {
    height: '100%',
  },
  backIconContainer: {
    position: 'absolute',
    top: 35,
    left: 25,
    zIndex: 1,
    // blury background
    backgroundColor: 'rgba(0,0,0,0.1)',
    // circular shape
    borderRadius: 50,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  destinationPhoto: {},
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    marginTop: 10,
  },
  infoContainer: {
    marginLeft: 20,
    marginTop: 15,
  },

  photoCarousel: {
    marginTop: 10,
  },

  bottomTabs: {
    position: 'absolute',
    bottom: 0,
  },

  descriptionText: {
    color: '#5E5F61',
    lineHeight: 18,
  },

  eventCard: {marginBottom: 15},
});

export default Trip;
