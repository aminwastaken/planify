import React from 'react';
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
import ProfileForm from '../components/ProfileForm';

const EditProfile = ({navigation, children}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [entries, setEntries] = useState(0);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthmonth, setBirthmonth] = useState('');
  const [birthyear, setBirthyear] = useState('');
  console.log(process.env.NODE_ENV);
  console.log('BACKEND_BASE_URL', process.env);
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Edit profile</Text>
          <ProfileView
            firstname="John"
            lastname="Doe"
            email="john.doe@example.com"
          />
          {/* <ProfileMenu style={styles.profileMenu} navigation={navigation} /> */}
          <ProfileForm />
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

export default EditProfile;
