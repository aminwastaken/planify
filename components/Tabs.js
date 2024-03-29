import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.mainContainer}>
      {tabs?.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            setActiveTab(index);
          }}
          key={item}>
          <Text style={index === activeTab ? styles.selected : styles.text}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text: {color: '#8a8a8e', fontWeight: '400', fontSize: 14},
  selected: {
    color: '#007AFF',
    fontWeight: '400',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Tabs;
