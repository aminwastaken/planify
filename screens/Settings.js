import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default Settings;
