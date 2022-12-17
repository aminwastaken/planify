import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';

const ProfileView = ({user, firstname, lastname, email, profilePicture}) => {
  useEffect(() => {}, [user]);
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: profilePicture?.url
            ? profilePicture.url
            : 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
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
    borderRadius: 75,
    marginBottom: 10,
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
