import React, {useState, useEffect, useContext} from 'react';
import {useColorScheme, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreenStack,
  ProfileStack,
  ActivitiesStack,
  TripsStack,
} from './stacks';
import GlobalContext from './GlobalContext';
import Signup from './screens/Signup';
import Login from './screens/Login';
const Drawer = createDrawerNavigator();

global.apiUrl = 'http://51.15.219.3:5000/';
const Logout = () => {
  const {token, setToken} = useContext(GlobalContext);
  setToken('');
  return <View></View>;
};

const App = () => {
  const [token, setToken] = useState('');
  return (
    <GlobalContext.Provider
      value={{
        token: token,
        setToken: setToken,
      }}>
      {token && token != '' ? (
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Drawer.Screen name="Home" component={HomeScreenStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Activities" component={ActivitiesStack} />
            <Drawer.Screen name="Trips" component={TripsStack} />
            <Drawer.Screen name="Logout" component={Logout} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Signup" component={Signup} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </GlobalContext.Provider>
  );
};

export default App;
