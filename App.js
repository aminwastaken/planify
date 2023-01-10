import React, {useEffect, useContext} from 'react';
import {PermissionsAndroid, useColorScheme, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreenStack,
  ProfileStack,
  ActivitiesStack,
  TripsStack,
  DestinationsStack,
  UserActivitiesStack,
} from './stacks';
import GlobalContext from './GlobalContext';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Logout from './screens/Logout';
import Geolocation from '@react-native-community/geolocation';
import ResetPassword from './screens/ResetPassword';
const Drawer = createDrawerNavigator();

global.apiUrl = 'https://api.plnfy.com/';

// user@user.com token is eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsImlhdCI6MTY3MTYzNjk5OH0.YidlFWyAeNS2jixRFGvRotc5LZ7sr9ifnwUCg82q5Ow
// this token is useless hackers :)

const App = () => {
  const [token, setToken] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [showOnlyLocal, setShowOnlyLocal] = React.useState(false);

  const [userLocation, setUserLocation] = React.useState({});

  useEffect(() => {
    console.log("in the app's useEffect");
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        // subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permission Granted');
            // getOneTimeLocation();
            Geolocation.getCurrentPosition(
              info => {
                // console.log('setting users location to =', {
                //   longitude: info.coords.longitude,
                //   latitude: info.coords.latitude,
                // });

                setUserLocation({
                  longitude: info.coords.longitude,
                  latitude: info.coords.latitude,
                });

                // console.log('info', info);
              },

              error => console.error(error),
              {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
            );
          } else {
            console.log('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      // Geolocation.clearWatch(watchId);
    };
  }, []);

  const getOneTimeLocation = () => {
    console.log('getting one time location');
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        console.log('longitude', currentLongitude);
        console.log('latitude', currentLatitude);
        setUserLocation({
          longitude: currentLongitude,
          latitude: currentLatitude,
        });
      },
      error => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        token: token,
        setToken: setToken,
        userId: userId,
        setUserId: setUserId,
        showOnlyLocal: showOnlyLocal,
        setShowOnlyLocal: setShowOnlyLocal,
        userLocation: userLocation,
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
            <Drawer.Screen
              name="Your Activities"
              component={UserActivitiesStack}
            />
            <Drawer.Screen name="Destinations" component={DestinationsStack} />
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
            <Drawer.Screen name="ResetPassword" component={ResetPassword} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </GlobalContext.Provider>
  );
};

export default App;
