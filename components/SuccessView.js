import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../components/Button';

const SuccessView = ({title, text, action, buttonValue}) => {
  return (
    <View style={styles.scrollView}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
        <Image
          source={require('../assets/images/success-icon.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Button style={styles.button} onPress={action}>
          {buttonValue ? buttonValue : 'Continue'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollView: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 35,
    flex: 1,
  },

  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
  },

  titleArea: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#4A4A4A',
    textAlign: 'center',
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
});

export default SuccessView;
