import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import TabsView from '../components/TabsView';
import GlobalContext from '../GlobalContext';
import HorizontalCardList from '../components/HorizontalCardList';
import {getFormattedDate, getFormattedTime} from '../utils/format';

const Destinations = ({navigation, children}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const getDestinations = async () => {
    const response = await fetch(global.apiUrl + 'places', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    const destinations = await response.json();

    destinationList = [];

    destinations.places.forEach(place => {
      console.log('place', place);
      const formattedplace = {
        id: place.id,
        image:
          place.medias && place.medias.length > 0
            ? place.medias[0].url
            : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
        title: place.name,
        subtitle: 'paris',
        // subtitle: place.address && place.address.city ? place.address.city : '',
        // subtitle2: place.date && getFormattedTime(place.date),
        footerText:
          (place.address && place.address.postalCode
            ? place.address.postalCode
            : '') +
          ' ' +
          (place.address && place.address.city ? place.address.city : ''),
        onPress: () => {
          navigation.navigate('destination', {
            id: place.id,
          });
        },
      };
      destinationList.push(formattedplace);
    });
    setDestinations(destinationList);
  };

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Destinations</Text>
        </View>
        <View style={styles.content}>
          {destinations && destinations.length > 0 && (
            <HorizontalCardList data={destinations} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollView: {
    marginLeft: 25,
    marginTop: 35,
    flex: 1,
  },
  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  titleArea: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
});

export default Destinations;
