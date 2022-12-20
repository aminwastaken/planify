import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = ({markers, currentLocation}) => {
  console.log('currentLocation from the map', currentLocation);

  return (
    <View style={styles.mapcontainer}>
      {currentLocation &&
        currentLocation.latitude &&
        currentLocation.longitude && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 48.8566,
              longitude: 2.3522,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showUserLocation={true}>
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

            {console.log('you are here', {
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
            />
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
