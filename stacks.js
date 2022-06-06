import React from 'react';
import Text from './components/Text';
import Home from './screens/Home';
import {View, screen} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import Destination from './screens/Destination';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Activities from './screens/Activities';

const Stack = createStackNavigator();

const HomeScreenStack = ({navigation}) => {
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
};

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};

const ActivitiesStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Activities"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="activities" component={Activities} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};

export {HomeScreenStack, ProfileStack, ActivitiesStack};
