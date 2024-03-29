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
import HorizontalCard from '../components/HorizontalCard';
import Map from '../components/Map';
import {getFormattedDate, getFormattedTime} from '../utils/format';
import LoadingScreen from '../components/LoadingScreen';

const Trip = ({navigation, route, id}) => {
  const {token, userLocation} = useContext(GlobalContext);
  const [trip, setTrip] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrip = async () => {
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
      setTrip({
        id: data.id,
        title: data.name,
        image:
          data.activities && data.activities.length > 0
            ? data.activities[0].image
              ? data.activities[0].image
              : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg'
            : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
        subtitle: data.activities.length + ' activities',
      });
      // console.log('activities', JSON.stringify(data.activities, null, 2));

      setActivities(
        data.activities
          .filter(activity => new Date(activity.date) > new Date())
          .sort((a, b) => {
            if (new Date(a.date) < new Date(b.date)) return -1;
            else return 1;
          })
          .map(activity => {
            return {
              id: activity.id,
              image:
                activity.medias && activity.medias.length > 0
                  ? activity.medias[0].url
                  : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
              title: activity.name,
              subtitle: activity.date && getFormattedDate(activity.date),
              subtitle2: activity.date && getFormattedTime(activity.date),
              footerText: activity.price && 'Price: ' + activity.price + '€',
              onPress: () => {
                navigation.navigate('activity', {id: activity.id});
              },
              address: activity.address,
            };
          }),
      );
    } catch (error) {
      console.log('error', error);
      navigation.navigate('trips');
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTrip();
    });
    return unsubscribe;
  }, [navigation]);

  const deleteTrip = async () => {
    try {
      const response = await fetch(global.apiUrl + 'trips/' + route.params.id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      navigation.goBack();
    } catch (error) {
      console.log('error', error);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        {/* <PageCover image={trip.image} title={trip.title} /> */}
        <Map currentLocation={userLocation} data={activities} />
        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>
            {activities && activities.length > 0 && 'Activities'}
          </Text>

          {activities.map(item => (
            <HorizontalCard
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
        <Button style={styles.button} onPress={deleteTrip}>
          Delete trip
        </Button>
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
  subtitle: {
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

  button: {
    backgroundColor: '#AD081B',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 7.56,
    margin: 10,
  },
});

export default Trip;
