import React, {useEffect} from 'react';
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
import {HomeScreenStack, ProfileStack, ActivitiesStack} from './stacks';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Text from './components/Text';
import Home from './screens/Home';
import BottomTabs from './components/BottomTabs';
import Signup from './screens/Signup';
import Login from './screens/Login';
const Drawer = createDrawerNavigator();
const Test = () => {
  return <View></View>;
};

global.apiUrl = 'http://51.15.219.3:5000/';
const Logout = props => {
  const {setToken} = props.route.params;
  setToken('');
  return <View></View>;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [token, setToken] = React.useState('');
  useEffect(() => {}, [global.token]);

  const changeToken = token => {
    setToken(token);
    global.token = token;
  };

  return (
    <>
      {global.token ? (
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
            initialParams={{token: token, setToken: changeToken}}
            options={{
              token: token,
              setToken: setToken,
            }}>
            <Drawer.Screen name="Home" component={HomeScreenStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Activities" component={ActivitiesStack} />
            <Drawer.Screen
              name="Logout"
              component={Logout}
              initialParams={{setToken: setToken}}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          {/* should pass on token as a parameter */}
          <Drawer.Navigator
            initialRouteName="Login"
            // pass on token as a parameter

            screenOptions={{
              headerShown: false,
            }}
            params={{token: token, setToken: setToken}}>
            <Drawer.Screen
              name="Login"
              component={Login}
              // component={() => <Login token={token} setToken={setToken} />}
              options={{
                token: token,
                setToken: setToken,
              }}
              // params={{token: token, setToken: setToken}}
              initialParams={{token: token, setToken: changeToken}}
              // pass on token as a parameter
            />
            <Drawer.Screen name="Signup" component={Signup} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
