import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width: windowWidth} = Dimensions.get('window');

const PhotosCarousel = ({style, data, imageIndex, onPress, navigation}) => {
  const carouselRef = useRef(null);

  console.log(JSON.stringify(data, null, 2));
  function renderItem({item}) {
    const {image, title, url, subtitle, id, index} = item;

    return (
      <View style={{...styles.item}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onPress(index);
          }}>
          <Image source={{uri: image}} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{style, ...styles.container}}>
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={120}
        separatorWidth={20}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    height: 'auto',
  },
  carousel: {
    width: windowWidth,
    height: 120,
    flexGrow: 0,
  },
  item: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: 120,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  image: {
    borderRadius: 20,
    width: '90%',
    height: '100%',
    aspectRatio: 1,
    backgroundColor: '#EBEBEB',
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  lowerLeft: {
    width: '50%',
  },

  title: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },

  subtitle: {
    position: 'absolute',
    bottom: 12,
    left: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  subtitleText: {
    color: '#FFF',
  },

  subtitleIcon: {
    marginRight: 3,
  },
});

export default PhotosCarousel;
