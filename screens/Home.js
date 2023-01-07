import React, {useEffect, useContext} from 'react';
import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import Text from '../components/Text';
import {destinations, moreDestinations} from '../data/destinations';
import GlobalContext from '../GlobalContext';

const Home = ({navigation, children, ...rest}) => {
  const {token, setToken, showOnlyLocal, userLocation} =
    useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(0);
  const [allDestinations, setAllDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlaceTypes = async () => {
    try {
      const response = await fetch(global.apiUrl + 'place-types', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const placeTypes = await response.json();
      // console.log('placeTypes', placeTypes);
      return placeTypes;
    } catch (error) {
      console.log('the error is', error);
    }
  };

  const getDestinations = async () => {
    try {
      const placeTypes = await getPlaceTypes();
      const response = await fetch(global.apiUrl + 'places?limit=800', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const destinations = await response.json();
      console.log('destinations', destinations);
      console.log('show only local', showOnlyLocal);
      console.log('user location', userLocation);

      console.log("type of user's latitude", typeof userLocation.latitude);
      console.log("place's latitude", destinations.places[1].address.latitude);

      const maxDistance = 0.15;

      if (showOnlyLocal) {
        destinations.places = destinations.places.filter(place => {
          const distance = Math.sqrt(
            Math.pow(userLocation.latitude - place.address.latitude, 2) +
              Math.pow(userLocation.longitude - place.address.longitude, 2),
          );
          console.log('distance', distance);
          return distance < maxDistance;
        });
      }

      setAllDestinations(
        destinations.places.map(destination => {
          return {
            id: destination.id,
            image:
              destination.medias !== undefined && destination.medias.length > 0
                ? destination.medias[0].url
                : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
            title: destination.name,
            url: destination.website,
            subtitle: {
              icon: 'location-outline',
              text: destination.address.city,
            },
          };
        }),
      );
      console.log('placeTypes', placeTypes);
    } catch (error) {
      console.log('the error is', error);
    }
  };

  const getActivities = async () => {
    try {
      const response = await fetch(
        global.apiUrl + 'activities?page=1&limit=800',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const activities = await response.json();
      setActivities(
        activities.activities
          .filter(activity => {
            if (new Date(activity.date) > new Date()) return true;
            else return false;
          })
          .map(activity => {
            return {
              id: activity.id,
              image:
                activity.medias !== undefined && activity.medias.length > 0
                  ? activity.medias[0].url
                  : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
              title: activity.name,
              subtitle: {
                icon: 'location-outline',
                text: 'Paris',
              },
            };
          }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const loadData = async () => {
    await getDestinations();
    await getActivities();
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [userLocation]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.description}>
            Explore places, hotels and more{' '}
          </Text>
        </View>
        <SearchBar
          style={styles.searchBar}
          onPress={() => {
            navigation.navigate('search');
          }}
        />
        <View style={styles.subTitleArea}>
          <Text style={styles.subTitle}>Upcoming activities</Text>
        </View>
        <View>
          <Carousel
            style={styles.carousel}
            data={activities}
            navigation={navigation}
            screen="activity"
          />
        </View>
        <View style={styles.subTitleArea}>
          <Text style={styles.subTitle}>Destinations</Text>
        </View>
        <Carousel
          style={styles.carousel}
          mini={true}
          data={activeTab === 0 && allDestinations}
          navigation={navigation}
          screen="destination"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  scrollView: {marginLeft: 25, marginTop: 35},
  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  titleArea: {
    marginBottom: 20,
  },

  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#B6B6B8',
  },

  tabContainer: {
    width: 280,
  },
  searchBar: {
    marginBottom: 20,
    width: 300,
  },
  carousel: {
    marginTop: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  subTitleArea: {
    // marginTop: 20,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Home;
