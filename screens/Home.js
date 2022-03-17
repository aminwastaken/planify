import React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import Text from '../components/Text';

const Home = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [entries, setEntries] = useState(0);
  return (
    <View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.description}>Explore places, hotels and more </Text>
      </View>
      <SearchBar style={styles.searchBar} />
      <Tabs
        data={['Destinations', 'Hotels', 'Restaurants', 'More']}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Carousel style={styles.carousel} />
      <View style={styles.subTitleArea}>
        <Text style={styles.subTitle}>More to explore</Text>
      </View>
      <Carousel style={styles.carousel} mini={true} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Home;
