import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';

const ProfileView = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png',
        }}
        style={styles.profilePhoto}
      />

      <Text> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePhoto: {
    height: 100,
    width: 100,
  },
});

export default ProfileView;
