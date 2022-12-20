import React from 'react';
import Text from './components/Text';
import Home from './screens/Home';
import {View, screen} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Destination from './screens/Destination';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Activities from './screens/Activities';
import Trips from './screens/Trips';
import EditProfile from './screens/EditProfile';
import PickTrip from './screens/PickTrip';
import ActivityBooked from './screens/ActivityBooked';
import NewTrip from './components/NewTrip';
import Activity from './screens/Activity';
import Trip from './screens/Trip';
import Search from './screens/Search';
import Destinations from './screens/Destinations';
const Stack = createStackNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />

      {/* activity branch */}
      <Stack.Screen name="activity" component={Activity} />
      {/* destination branch */}
      <Stack.Screen name="destination" component={Destination} />
      <Stack.Screen name="pickTrip" component={PickTrip} />
      <Stack.Screen name="newTrip" component={NewTrip} />
      <Stack.Screen name="ActivityBooked" component={ActivityBooked} />
      {/* search branch */}
      <Stack.Screen name="search" component={Search} />
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
      <Stack.Screen name="activity" component={Activity} />
    </Stack.Navigator>
  );
};

const DestinationsStack = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Destinations"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="destinations" component={Destinations} />
      <Stack.Screen name="destination" component={Destination} />
    </Stack.Navigator>
  );
};

const TripsStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Trips"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="trips" component={Trips} />
      <Stack.Screen name="Trip" component={Trip} />
      <Stack.Screen name="activity" component={Activity} />
    </Stack.Navigator>
  );
};

export {
  HomeScreenStack,
  ProfileStack,
  ActivitiesStack,
  TripsStack,
  DestinationsStack,
};
