import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {notreDame, notreDamePhotos} from '../data/destinations';
import PageCover from '../components/PageCover';
import Text from '../components/Text';
import PhotosCarousel from '../components/PhotosCarousel';
import BottomTabs from '../components/BottomTabs';

const Destination = ({navigation, route}) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    setImage(notreDame);
    setTitle('Notre Dame');
    setPrice(20);
  });

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <PageCover image={image} title={title} price={price} />
        <View style={styles.infoContainer}>
          <Text style={styles.subTitle}>Photos</Text>
          <PhotosCarousel data={notreDamePhotos} />
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
  destinationPhoto: {},
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
  },
  infoContainer: {
    marginLeft: 20,
    marginTop: 25,
  },

  bottomTabs: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Destination;
