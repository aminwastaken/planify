import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BottomTabs from '../components/BottomTabs';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import Text from '../components/Text';
import {destinations, moreDestinations} from '../data/destinations';
import {Button} from 'react-native-paper';
import ProfileView from '../components/ProfileView';
import ProfileMenu from '../components/ProfileMenu';
import GlobalContext from '../GlobalContext';

const Profile = ({navigation, children}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [entries, setEntries] = useState(0);

  const {token, setToken} = useContext(GlobalContext);
  const [updateNumber, setUpdateNumber] = useState(0);
  const [user, setUser] = useState({});

  const getCurrentUser = async () => {
    try {
      const response = await fetch(global.apiUrl + 'me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const user = await response.json();
      return user;
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const loadData = async () => {
    const user = await getCurrentUser();
    setUser(user);
    console.log('updated user ', user);
  };

  const update = () => {
    console.log('update function');
    setUpdateNumber(updateNumber + 1);
  };

  useEffect(() => {
    //reload data when navigating to this screen
    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Profile</Text>
          <ProfileView
            user={user}
            firstname={user.firstName}
            lastname={user.lastName}
            email={user.email}
            profilePicture={user.profilePicture}
          />
          <ProfileMenu style={styles.profileMenu} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  scrollView: {marginLeft: 25, marginTop: 35},
  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  titleArea: {
    marginBottom: 20,
  },

  profileMenu: {
    marginTop: 50,
  },
});

export default Profile;
