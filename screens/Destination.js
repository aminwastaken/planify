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
import RatingCard from '../components/RatingCard';
import StarsInput from '../components/StarsInput';
import UserReviewCard from '../components/UserReviewCard';
import LoadingScreen from '../components/LoadingScreen';
import {getFormattedDate, getFormattedTime} from '../utils/format';

const Destination = ({navigation, route, id}) => {
  const {token, setToken, userId} = useContext(GlobalContext);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const [destinationType, setDestinationType] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [activities, setActivities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [destinationId, setDestinationId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [ratingAverage, setRatingAverage] = useState(0);
  const [ratingDetails, setRatingDetails] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [alreadyReviewed, setAlreadyReviewed] = useState(false);

  const getDestination = async () => {
    try {
      const response = await fetch(
        global.apiUrl + 'places/' + route.params.id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'BgetDearer ' + token,
          },
        },
      );

      const reviewsResponse = await fetch(
        global.apiUrl + 'reviews?place=' + route.params.id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );

      const reviews = await reviewsResponse.json();

      console.log('user id', userId);
      console.log('reviews', reviews);

      setReviews(
        reviews?.reviews.map(review => {
          if (review.authorId === userId) setAlreadyReviewed(true);
          return {
            review: review.description,
            date: review.createdAt,
            rating: parseFloat(review.rating),
            username: review.author.firstName + ' ' + review.author.lastName,
          };
        }),
      );

      const destination = await response.json();

      if (destination.rating) {
        setRatingAverage(destination.rating?.average);
        setRatingDetails([
          {
            rating: 1,
            value: destination.rating.one,
          },
          {
            rating: 2,
            value: destination.rating.two,
          },
          {
            rating: 3,
            value: destination.rating.three,
          },
          {
            rating: 4,
            value: destination.rating.four,
          },
          {
            rating: 5,
            value: destination.rating.five,
          },
        ]);
        setTotalReviews(
          destination.rating.one +
            destination.rating.two +
            destination.rating.three +
            destination.rating.four +
            destination.rating.five,
        );
      }
      setImage(0);
      if (destination.medias !== undefined && destination.medias.length > 0) {
        setImages(
          destination?.medias?.map((image, index) => ({
            index: index,
            id: image.id,
            image: image.url,
          })),
        );
      }
      setDestinationId(destination.id);
      setTitle(destination.name);
      setDescription(destination.description);
      setDestinationType(destination?.type?.name);

      const destinationActivities = destination?.activities?.map(activity => ({
        id: activity.id,
        title: activity.name,
        image:
          activity.medias && activity.medias.length > 0
            ? activity.medias[0].url
            : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
        subtitle: getFormattedDate(activity.date),
        subtitle2: getFormattedTime(activity.date),
        footerText: 'Price: ' + activity.price + '€',
        onPress: () => {
          navigation.navigate('activity', {id: activity.id});
        },
      }));

      setActivities(destinationActivities);
    } catch (error) {
      console.log('error', error);
    }
    setLoading(false);
  };

  const handleRatingChange = rating => {
    setRating(rating);
    navigation.navigate('review', {id: destinationId, rating: rating});
  };

  const onPhotoPress = index => {
    setImage(index);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDestination();
    });
    return unsubscribe;
  }, [navigation]);

  if (loading) return <LoadingScreen />;

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <PageCover
          image={
            images && images?.length > 0
              ? images[image].image
              : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg'
          }
          title={title}
          price={price}
          subtitle={destinationType}
        />
        <View style={styles.infoContainer}>
          {images.length > 0 && (
            <>
              <Text style={styles.subtitle}>Photos</Text>
              <PhotosCarousel
                onPress={onPhotoPress}
                data={images}
                style={styles.photoCarousel}
                imageIndex={image}
              />
            </>
          )}
          {description && description.length > 0 && (
            <Text style={styles.subtitle}>Description</Text>
          )}
          <Text style={styles.descriptionText}>{description}</Text>
          {activities && activities.length > 0 && (
            <Text style={styles.activitiesSubtitle}>Activities</Text>
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

          {!alreadyReviewed && (
            <>
              <Text style={styles.title}>Rate this destination</Text>
              <Text style={styles.smallText}>
                Tell us what you think about this place
              </Text>
              <StarsInput onChange={handleRatingChange} value={rating} />
            </>
          )}

          {reviews && reviews.length > 0 && (
            <>
              <Text style={styles.activitiesSubtitle}>Reviews</Text>
              <RatingCard
                rating={ratingAverage}
                totalReviews={totalReviews}
                ratingDetails={ratingDetails}
                ratingAverage={ratingAverage}
              />
            </>
          )}
          <View style={styles.userReviewsContainer}>
            {reviews?.map(review => (
              <UserReviewCard
                key={review.id}
                review={review.review}
                date={review.date}
                rating={review.rating}
                username={review.username}
                style={styles.userReviewCard}
              />
            ))}
          </View>
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
  title: {
    fontSize: 20,
    fontWeight: '700',
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
  eventCard: {marginBottom: 15},
  smallText: {
    color: '#5E5F61',
  },
  userReviewsContainer: {
    marginTop: 10,
  },
  userReviewCard: {
    marginTop: 10,
  },
});

export default Destination;
