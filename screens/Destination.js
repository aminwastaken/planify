import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import {notreDame, notreDamePhotos} from '../data/destinations';
import PageCover from '../components/PageCover';
import Text from '../components/Text';
import PhotosCarousel from '../components/PhotosCarousel';
import BottomTabs from '../components/BottomTabs';
import {TouchableOpacity} from 'react-native';
import Button from '../components/Button';

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
          <PhotosCarousel data={notreDamePhotos} style={styles.photoCarousel} />
          <Text style={styles.subTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultrices arcu in neque euismod, ac pharetra quam
            egestas. Nunc arcu ante, gravida in neque ac, cursus lacinia purus.
            In vitae rutrum urna. Nam ultricies turpis non turpis lobortis
            cursus. Cras consequat nunc quis lorem sollicitudin, eu hendrerit
            neque euismod. Duis ipsum nulla, feugiat id hendrerit quis,
            consequat ac urna. Nam ultrices maximus egestas.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate('pickTrip');
          }}>
          Add to trip
        </Button>
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
});

export default Destination;
