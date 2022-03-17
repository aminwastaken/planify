import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import Text from '../components/Text';
import {destinations, moreDestinations} from '../data/destinations';

const Home = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [entries, setEntries] = useState(0);
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Header style={styles.header} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.description}>
            Explore places, hotels and more{' '}
          </Text>
        </View>
        <SearchBar style={styles.searchBar} />
        <Tabs
          data={['Destinations', 'Hotels', 'Restaurants', 'More']}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Carousel style={styles.carousel} data={destinations} />
        <View style={styles.subTitleArea}>
          <Text style={styles.subTitle}>More to explore</Text>
        </View>
        <View style={{marginBottom: 50}}>
          <Carousel
            style={styles.carousel}
            mini={true}
            data={moreDestinations}
          />
        </View>
      </ScrollView>
      <BottomTabs
        tabs={[
          {icon: 'home'},
          {icon: 'document-text-outline'},
          {icon: 'heart'},
        ]}
        style={styles.bottomTabs}
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
