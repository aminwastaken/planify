import React, {useEffect, useContext} from 'react';
import {useColorScheme, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack, ProfileStack, ActivitiesStack} from './stacks';
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
  const [token, setToken] = React.useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY3MDYxNjU3LCJleHAiOjE2NjcxNDgwNTd9.OzSaJuTIxgD4hJ3GwhFCbajFFQ2MqNpDQIlTJIQ46-0',
  );
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
