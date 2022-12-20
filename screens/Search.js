import React, {useEffect, useContext} from 'react';
import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import HorizontalCard from '../components/HorizontalCard';
import SearchBar from '../components/SearchBar';
import {destinations} from '../data/destinations';
import GlobalContext from '../GlobalContext';

const Search = ({navigation, children, ...rest}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const getDestinationResults = async () => {
    try {
      const response = await fetch(
        global.apiUrl + 'places?page=1&search=' + searchValue,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const destinations = await response.json();

      setDestinations(
        destinations &&
          destinations.places &&
          Array.isArray(destinations.places)
          ? destinations.places.map(destination => {
              return {
                id: destination.id,
                title: destination.name,
                footerText: destination?.address?.city,
                image: destination.medias[0]
                  ? destination.medias[0].url
                  : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
              };
            })
          : [],
      );
    } catch (error) {
      console.log('the error is', error);
    }
  };

  const getActivitiesResults = async () => {
    try {
      const response = await fetch(
        global.apiUrl + 'activities?page=1&search=' + searchValue,
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
        activities &&
          activities.activities &&
          Array.isArray(activities.activities)
          ? activities.activities.map(activity => {
              return {
                id: activity.id,
                title: activity.name,
                footerText: 'Price: ' + activity.price + '€',
                image: activity.medias[0]
                  ? activity.medias[0].url
                  : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
              };
            })
          : [],
      );
    } catch (error) {
      console.log('the error is', error);
    }
  };

  const handleSearchSubmit = async () => {
    await getDestinationResults();
    await getActivitiesResults();
    setSearchSubmitted(true);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <SearchBar
          style={styles.searchBar}
          focus={true}
          onSubmit={handleSearchSubmit}
          value={searchValue}
          onChange={value => setSearchValue(value)}
        />
        <View style={styles.searchResultContainer}>
          {destinations && destinations.length > 0 && (
            <Text style={styles.subtitle}>Destinations</Text>
          )}
          {destinations?.map(item => (
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

          {activities && activities.length > 0 && (
            <Text style={styles.subtitle}>Activities</Text>
          )}
          {activities?.map(item => (
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
      </ScrollView>
      {searchSubmitted &&
        (!activities || activities.length === 0) &&
        (!destinations || destinations.length === 0) && (
          <View style={styles.messageContainer}>
            <Text style={styles.mainMessage}>No results found</Text>
            <Text style={styles.subMessage}>
              Try searching again using a different spelling or keyword
            </Text>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {height: '100%'},
  scrollView: {marginLeft: 25, marginTop: 35},
  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  titleArea: {
    marginBottom: 20,
  },
  searchResultContainer: {
    marginLeft: 15,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#B6B6B8',
  },

  searchBar: {
    marginBottom: 20,
  },
  carousel: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    marginTop: 10,
    color: '#000',
  },

  mainMessage: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    marginTop: 10,
    color: '#000',
    textAlign: 'center',
  },
  subMessage: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'center',
    width: '80%',
  },

  messageContainer: {
    position: 'absolute',
    top: '50%',
    left: '42%',
    transform: [{translateX: -150}, {translateY: -50}],
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
