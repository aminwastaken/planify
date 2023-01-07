import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet, Image} from 'react-native';
import Text from './Text';
import Rating from './Rating';

const PageCover = ({image, title, price, subtitle}) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{
          minWidth: '100%',
          height: 500,
        }}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
        style={{
          position: 'absolute',
          width: '100%',
          height: '70%',
          bottom: 0,
        }}></LinearGradient>

      {title && title.length > 0 && <Text style={styles.title}>{title}</Text>}
      {subtitle && subtitle.length > 0 && (
        <Text style={styles.priceSecondaryText}>{subtitle}</Text>
      )}
      {price && (
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {price !== 'Free' ? (
              <>
                €{price}
                <Text style={styles.priceSecondaryText}> /person</Text>
              </>
            ) : (
              <Text style={styles.priceText}> Free </Text>
            )}
          </Text>
        </View>
      )}

      {/* <Rating style={styles.ratings} rating="4.5" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  priceText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceSecondaryText: {
    bottom: 40,
    left: 20,
    color: '#FFF',
    fontSize: 13,
  },

  priceContainer: {
    position: 'absolute',
    bottom: 35,
    left: 20,
  },
  ratings: {position: 'absolute', bottom: 68, right: 20},
});

export default PageCover;
