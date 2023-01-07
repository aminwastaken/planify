import React, {useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet, Button, Image, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const SearchBar = ({style, onPress, focus, value, onChange, onSubmit}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View style={{...styles.screen, ...style}}>
      {onPress ? (
        <Text onPress={onPress} style={styles.input}>
          Search places
        </Text>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Search places"
          value={value}
          onChangeText={text => onChange(text)}
          disabled={true}
          ref={inputRef}
        />
      )}

      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.5}
        onPress={onSubmit}>
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
    width: '100%',
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
    right: 5,
    top: 5,
  },
});

export default SearchBar;
