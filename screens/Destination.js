import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const Destination = ({navigation, route}) => {
  return (
    <View>
      <Text>Destination page {route.params.id}</Text>
      <Button
        onPress={() => {
          navigation.pop();
        }}>
        go back
      </Button>
    </View>
  );
};

export default Destination;
