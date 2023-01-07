import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = ({markers, currentLocation, data}) => {
  console.log('currentLocation from the map', currentLocation);

  return (
    <View style={styles.mapcontainer}>
      {currentLocation &&
        currentLocation.latitude &&
        currentLocation.longitude && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={
              data[0]?.address?.latitude && data[0]?.address?.longitude
                ? {
                    latitude: parseFloat(data[0].address.latitude),
                    longitude: parseFloat(data[0].address.longitude),
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                  }
                : {
                    latitude: 48.8566,
                    longitude: 2.3522,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.15,
                  }
            }
            showUserLocation={true}>
            {data?.map((item, index) => {
              if (!item?.address?.latitude || !item?.address?.longitude)
                return null;
              console.log('coordinates ', {
                latitude: parseFloat(item.address.latitude),
                longitude: parseFloat(item.address.longitude),
              });
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: parseFloat(item.address.latitude),
                    longitude: parseFloat(item.address.longitude),
                  }}
                  title={item.title}
                  description={item.subtitle}
                />
              );
            })}

            {/* <Marker
              coordinate={{
                latitude: 48.8566,
                longitude: 2.3522,
              }}
            />
            <Marker
              coordinate={{
                latitude: 48.8401,
                longitude: 2.3521,
              }}
            /> */}

            {/* {console.log('you are here', {
              latitude: parseFloat(currentLocation.latitude),
              longitude: parseFloat(currentLocation.longitude),
            })}
            <Marker
              coordinate={{
                latitude: parseFloat(currentLocation.latitude),
                longitude: parseFloat(currentLocation.longitude),
              }}
              title="You are here"
              description="You are here"
            /> */}
          </MapView>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapcontainer: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
