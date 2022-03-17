import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Image, StyleSheet} from 'react-native';

const Header = ({style}) => {
  return (
    <View style={style}>
      <Icon name="menu" color="#000" size={33} />
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePhoto: {
    // height: 100,
    // width: 100,
    position: 'absolute',
  },
});

export default Header;
