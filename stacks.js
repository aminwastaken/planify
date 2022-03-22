import React from 'react';
import Text from './components/Text';
import Home from './screens/Home';
import {View, screen} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import Destination from './screens/Destination';

const Stack = createStackNavigator();

const First = () => {
  return (
    <View>
      <Text>first screen of second stack</Text>
    </View>
  );
};

const Second = () => {
  return (
    <View>
      <Text>second screen of second stack</Text>
    </View>
  );
};

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="destination" component={Destination} />
    </Stack.Navigator>
  );
}

function SecondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home page" component={First} />
      <Stack.Screen name="another page" component={Second} />
    </Stack.Navigator>
  );
}

export {HomeScreenStack, SecondScreenStack};
