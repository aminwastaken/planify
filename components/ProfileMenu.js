import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import ProfileMenuItem from './ProfileMenuItem';

const ProfileMenu = ({style, navigation}) => {
  const menuItems = [
    // {
    //   id: 'settings',
    //   icon: 'settings',
    //   text: 'Settings',
    //   screen: 'settings',
    // },
    {
      id: 'edit',
      icon: 'edit',
      text: 'Edit profile',
      screen: 'editProfile',
    },
    {
      id: 'logout',
      icon: 'logout',
      text: 'Logout',
      screen: 'Logout',
    },
  ];
  return (
    <View style={[style, styles.mainContainer]}>
      {menuItems.map(item => {
        return (
          <ProfileMenuItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            screen={item.screen}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default ProfileMenu;
