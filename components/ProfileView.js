import React, {useContext, useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalContext from '../GlobalContext';

const createFormData = photo => {
  const data = new FormData();

  data.append('images', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  return data;
};

const ProfileView = ({
  user,
  firstname,
  lastname,
  email,
  edit,
  profilePicture,
  navigation,
}) => {
  const {token, setToken} = useContext(GlobalContext);
  useEffect(() => {}, [user]);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log('photo response', response);
      if (response && response.assets && response.assets[0]) {
        fetch(global.apiUrl + 'users/' + user.id, {
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + token,
          },
          body: createFormData(response.assets[0]),
        })
          .then(response => response.json())
          .then(response => {
            console.log('photo response', response);
            navigation.goBack();
          })
          .catch(error => {
            console.log('error', error);
          });
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profilePhotoContainer}>
        <Image
          source={{
            uri: profilePicture?.url
              ? profilePicture.url
              : 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png',
          }}
          style={styles.profilePhoto}
        />
        {edit && (
          <Pressable
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: 'grey',
              zIndex: 1,
              width: '100%',
              height: '100%',
              opacity: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleChoosePhoto}>
            <Icon name="photo-camera" size={40} color="white" />
          </Pressable>
        )}
      </View>
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
    marginBottom: 10,
  },
  profilePhotoContainer: {
    height: 150,
    width: 150,
    overflow: 'hidden',
    borderRadius: 75,
    position: 'relative',
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
