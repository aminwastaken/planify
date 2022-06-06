import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import ProfileMenuItem from './ProfileMenuItem';

const ProfileMenu = ({style}) => {
  const menuItems = [
    {
      id: 'settings',
      icon: 'settings',
      text: 'Settings',
      link: '',
    },
    {
      id: 'edit',
      icon: 'edit',
      text: 'Edit profile',
      link: '',
    },
    {
      id: 'logout',
      icon: 'logout',
      text: 'Logout',
      link: '',
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
            link={item.link}
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
