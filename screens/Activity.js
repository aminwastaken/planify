import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState, useContext} from 'react';
import {notreDame, notreDamePhotos} from '../data/destinations';
import PageCover from '../components/PageCover';
import Text from '../components/Text';
import PhotosCarousel from '../components/PhotosCarousel';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GlobalContext from '../GlobalContext';
import {set} from 'react-native-reanimated';
import {getFormattedDate} from '../utils/format';
import LoadingScreen from '../components/LoadingScreen';

const Activity = ({navigation, route, id}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [subscribed, setSubscribed] = useState(false);
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);
  const [tripId, setTripId] = useState();

  const [date, setDate] = useState();

  const loadActivity = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        global.apiUrl + 'activities/' + route.params.id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );

      const activity = await response.json();
      // console.log('activity', activity);
      const subscribedActivitiesResponse = await fetch(
        global.apiUrl + 'activities/subscribed',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const subscribedActivities = await subscribedActivitiesResponse.json();
      console.log('subscribed activities', subscribedActivities);
      if (Array.isArray(subscribedActivities)) {
        for (let i = 0; i < subscribedActivities.length; i++) {
          if (subscribedActivities[i].id === activity.id) {
            setSubscribed(true);
            setTripId(subscribedActivities[i].tripId);
            break;
          }
        }
      }

      setImage(
        activity.medias !== undefined && activity.medias.length > 0
          ? activity.medias[0].url
          : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
      );
      if (activity.medias !== undefined && activity.medias.length > 1) {
        setImages(
          activity.medias.slice(1).map(image => ({
            id: image.id,
            image: image.url,
          })),
        );
      }
      setTitle(activity.name);
      if (activity.date) setDate(getFormattedDate(activity.date));
      setDescription(activity.description);
      setPrice(activity.price ? activity.price : 'Free');
    } catch (error) {
      console.log('error', error);
    }
    setLoading(false);
  };

  // const getActivityTrip = () => {
  //   for (let i = 0; i < trips.length; i++) {
  //     if (trips[i].activities.includes(route.params.id)) {
  //       return trips[i].id;
  //     }
  //   }
  // };

  const deleteActivity = async () => {
    try {
      const response = await fetch(
        global.apiUrl + 'trips/' + tripId + '/activities',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            activityId: route.params.id,
          }),
        },
      );

      const data = await response.json();
      console.log('delete activity response', data);
      // navigation.goBack();
      setSubscribed(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  // const deleteActivity = async () => {
  //   console.log('trip id is', tripId);
  // };

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
      setTrips(
        data.map(trip => ({
          id: trip.id,
          activities: trip.activities.map(activity => activity.id),
        })),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    loadActivity();
    getTrips();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <PageCover image={image} title={title} price={price} />
        <View style={styles.infoContainer}>
          {images.length > 0 && (
            <>
              <Text style={styles.subTitle}>Photos</Text>
              <PhotosCarousel data={images} style={styles.photoCarousel} />
            </>
          )}

          <Text style={styles.text}>{date}</Text>
          {description && description.length > 0 && (
            <Text style={styles.subTitle}>Description</Text>
          )}
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {subscribed ? (
          <Button style={styles.errorButton} onPress={deleteActivity}>
            Unsubscribe from activity
          </Button>
        ) : (
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('pickTrip', {
                activityId: route.params.id,
              });
            }}>
            Add to trip
          </Button>
        )}
      </View>
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
  text: {
    fontSize: 20,
    fontWeight: '300',
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

  buttonContainer: {
    marginTop: 20,

    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    backgroundColor: '#0000', // invisible colo
  },

  button: {
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 7.56,
    margin: 10,
  },

  errorButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 7.56,
    margin: 10,
  },
});

export default Activity;
