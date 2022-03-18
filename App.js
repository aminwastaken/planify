import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Text from './components/Text';
import Home from './screens/Home';
const Drawer = createDrawerNavigator();
const Test = () => {
  return <View></View>;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
