import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
// import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileMenu = ({icon, text, navigation, screen}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        console.log('test');
        navigation.navigate(screen);
      }}>
      <View style={styles.iconTextContainer}>
        <View style={styles.iconContainer}>
          <Icon name={icon} color="#000" size={32} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Icon name="keyboard-arrow-right" color="#000" size={27} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // margin: 5,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 40,
    paddingBottom: 10,
    // backgroundColor: 'red',
  },

  iconContainer: {
    // display: 'flex',
    backgroundColor: '#EAEAEA',
    borderRadius: 4,
    padding: 3,
  },

  iconTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: '7%',
  },
});

export default ProfileMenu;
