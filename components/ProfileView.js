import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';

const ProfileView = ({firstname, lastname, email}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: 'https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png',
        }}
        style={styles.profilePhoto}
      />
      <Text style={styles.fullName}>
        {firstname} {lastname}
      </Text>
      <Text style={styles.email}> {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginRight: 50,
  },
  profilePhoto: {
    height: 150,
    width: 150,
  },
  fullName: {
    fontSize: 20,
    fontWeight: '700',
    // marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#707070',
  },
});

export default ProfileView;
