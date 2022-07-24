import React from 'react';
import Text from './components/Text';
import Home from './screens/Home';
import {View, screen} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Destination from './screens/Destination';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Activities from './screens/Activities';
import EditProfile from './screens/EditProfile';
import PickTrip from './screens/PickTrip';
import ActivityBooked from './screens/ActivityBooked';

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
      <Stack.Screen name="pickTrip" component={PickTrip} />
      <Stack.Screen name="ActivityBooked" component={ActivityBooked} />
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
      <Stack.Screen name="editProfile" component={EditProfile} />
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
