import React, {useEffect, useContext} from 'react';
import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import Text from '../components/Text';
import {destinations, moreDestinations} from '../data/destinations';
import {Button} from 'react-native-paper';
import GlobalContext from '../GlobalContext';

const Home = ({navigation, children, ...rest}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(0);
  const [allDestinations, setAllDestinations] = useState([]);
  const [entries, setEntries] = useState(0);
  useEffect(async () => {
    try {
      const response = await fetch(global.apiUrl + 'places', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const destinations = await response.json();
      console.log('all destinations', destinations);
      // if it's too bugy, git restore
      setAllDestinations(
        destinations.map(destination => {
          return {
            id: destination.id,
            image: destination.image,
            title: destination.name,
            url: destination.website,
            subtitle: {icon: 'location-outline', text: destination.city},
          };
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  }, []);

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
        <SearchBar style={styles.searchBar} />
        <Tabs
          data={['All destinations', 'Hotels', 'Restaurants', 'More']}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Carousel
          style={styles.carousel}
          data={destinations}
          navigation={navigation}
        />
        <View style={styles.subTitleArea}>
          <Text style={styles.subTitle}>Activities</Text>
        </View>
        <View style={{marginBottom: 50}}>
          <Carousel
            style={styles.carousel}
            mini={true}
            data={moreDestinations}
            navigation={navigation}
          />
        </View>
      </ScrollView>
      <BottomTabs
        tabs={[
          {id: 'home', icon: 'home'},
          {id: 'test', icon: 'document-text-outline'},
          {id: 'favorites', icon: 'heart'},
        ]}
      />
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

  searchBar: {
    marginBottom: 20,
  },
  carousel: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  subTitleArea: {
    marginTop: 20,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Home;
