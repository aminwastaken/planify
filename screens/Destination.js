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

const Destination = ({navigation, route, id}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [activities, setActivities] = useState([]);

  const getDestination = async () => {
    try {
      const response = await fetch(
        global.apiUrl + 'places/' + route.params.id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const destination = await response.json();

      setImage(
        destination.medias !== undefined && destination.medias.length > 0
          ? destination.medias[0].url
          : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
      );
      if (destination.medias !== undefined && destination.medias.length > 1) {
        setImages(
          destination.medias.slice(1).map(image => ({
            id: image.id,
            image: image.url,
          })),
        );
      }
      setTitle(destination.name);
      setDescription(destination.description);

      const destinationActivities = destination.activities.map(activity => ({
        id: activity.id,
        title: activity.name,
        image:
          activity.medias && activity.medias.length > 0
            ? activity.medias[0].url
            : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
        subtitle: activity.date,
        subtitle2: 'time',
        footerText: 'Price: ' + activity.price + '€',
        onPress: () => {
          navigation.navigate('activity', {id: activity.id});
        },
      }));

      setActivities(destinationActivities);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getDestination();
  }, []);

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
              <Text style={styles.subtitle}>Photos</Text>
              <PhotosCarousel data={images} style={styles.photoCarousel} />
            </>
          )}
          {description && description.length > 0 && (
            <Text style={styles.subtitle}>Description</Text>
          )}
          <Text style={styles.descriptionText}>{description}</Text>
          {activities && activities.length > 0 && (
            <Text style={styles.activitiesSubtitle}>Activities</Text>
          )}

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

  activitiesSubtitle: {
    fontSize: 20,
    fontWeight: '700',
    // // marginBottom: 5,
    marginTop: 10,
    marginBottom: 15,
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
});

export default Destination;
