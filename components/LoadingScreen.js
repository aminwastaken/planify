import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingScreen = ({style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <ActivityIndicator
        animating={true}
        color="#007AFF"
        size={60}
        style={styles.activityIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 100,
  },
});

export default LoadingScreen;
