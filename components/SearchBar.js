import React from 'react';
import {View, TextInput, StyleSheet, Button, Image} from 'react-native';
import {IconButton} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const SearchBar = ({style}) => {
  return (
    <View style={{...styles.screen, ...style}}>
      <TextInput style={styles.input} placeholder="Search places" />
      <TouchableOpacity style={styles.searchButton} activeOpacity={0.5}>
        <View style={styles.searchButtonContainer}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.ImageIconStyle}
          />
        </View>

        <View style={styles.SeparatorLine} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    // borderWidth: 1,7
    backgroundColor: '#F2F2F7',
    borderRadius: 30,
    fontSize: 16,
  },
  ImageIconStyle: {
    width: 20,
    height: 20,
  },

  searchButtonContainer: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: '50%',
  },

  searchButton: {
    position: 'absolute',
    left: 255,
    top: 5,
  },
});

export default SearchBar;
