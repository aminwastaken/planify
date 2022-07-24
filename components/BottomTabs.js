import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const BottomTabs = ({tabs, style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      {tabs?.map(item => (
        <TouchableOpacity
          onPress={() => {
            console.log('test');
          }}
          key={item.id}>
          <Icon name={item.icon} color="#454545" size={27} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 55,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default BottomTabs;
