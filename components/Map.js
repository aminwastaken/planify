import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = ({markers}) => {
  return (
    <View style={styles.mapcontainer}>
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
        <Marker
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
        />
      </MapView>
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
