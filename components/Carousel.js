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

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    id: 'item2',
    image: 'https://i.imgur.com/N3nQ9CS.jpg',
    title: 'Peach',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    description: 'some text',
  },
  {
    id: 'item3',
    image: 'https://i.imgur.com/AzdYlDM.jpg',
    title: 'Camera',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    description: 'some more text',
  },
  {
    id: 'item1',
    image: 'https://i.imgur.com/s7GgEa8.jpg',
    title: 'Shoes',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item6',
    image: 'https://i.imgur.com/1O1Kd6T.jpg',
    title: 'Bottle',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item4',
    image: 'https://i.imgur.com/eNuhvpN.jpg',
    title: 'Modern',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },

  {
    id: 'item5',
    image: 'https://i.imgur.com/jEiBmma.jpg',
    title: 'Cigarettes',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
];

export default function CustomCarousel(props) {
  const {style, mini} = props;
  const carouselRef = useRef(null);

  function renderItem({item, index}) {
    const {image, title, url, description} = item;
    let moreStyles = {};
    if (mini) {
      moreStyles = {width: 150};
    }
    return (
      <View style={{...styles.item, ...moreStyles}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('test');
          }}>
          <Image source={{uri: image}} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }

  let moreStyles = {};
  if (mini) {
    moreStyles = {height: 200};
  }

  return (
    <View style={{style, ...styles.container}}>
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style, moreStyles]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={mini ? 120 : 180}
        separatorWidth={40}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    height: 'auto',
  },
  carousel: {
    width: windowWidth,
    height: 320,
    flexGrow: 0,
  },
  item: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: 200,
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

  description: {
    position: 'absolute',
    bottom: 12,
    left: 15,
    color: '#FFF',
  },
});
