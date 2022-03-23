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
import {HomeScreenStack, SecondScreenStack} from './stacks';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Text from './components/Text';
import Home from './screens/Home';
import BottomTabs from './components/BottomTabs';
const Drawer = createDrawerNavigator();
const Test = () => {
  return <View></View>;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="HomeStack" component={HomeScreenStack} />
          <Drawer.Screen
            name="SecondScreenStack"
            component={SecondScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>

      <BottomTabs
        tabs={[
          {icon: 'home'},
          {icon: 'document-text-outline'},
          {icon: 'heart'},
        ]}
      />
    </>
  );
};

export default App;
