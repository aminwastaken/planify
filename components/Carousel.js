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

const CustomCarousel = ({style, mini, data}) => {
  const carouselRef = useRef(null);

  function renderItem({item, index}) {
    const {image, title, url, subtitle} = item;
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
        {/* <Text style={styles.subtitle}>Paris</Text> */}
        <View style={styles.subtitle}>
          {subtitle.icon && (
            <Icon
              name={subtitle.icon}
              color="#FFF"
              size={15}
              style={styles.subtitleIcon}
            />
          )}
          <Text style={styles.subtitleText}>{subtitle.text}</Text>
        </View>
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
};

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

export default CustomCarousel;
