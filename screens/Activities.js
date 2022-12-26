import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import TabsView from '../components/TabsView';
import GlobalContext from '../GlobalContext';
import HorizontalCardList from '../components/HorizontalCardList';
import {getFormattedDate, getFormattedTime} from '../utils/format';
import LoadingScreen from '../components/LoadingScreen';
import {set} from 'react-native-reanimated';

const Activities = ({navigation, children}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getActivities = async () => {
    setLoading(true);
    const response = await fetch(global.apiUrl + 'activities?limit=800', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    const activities = await response.json();
    console.log('activities', activities);

    const upcoming = [];
    const past = [];

    //show only upcoming activities

    activities.activities = activities.activities.filter(
      activity => new Date(activity.date) > new Date(),
    );

    setActivities(
      activities.activities.map(activity => {
        return {
          id: activity.id,
          image:
            activity.medias && activity.medias.length > 0
              ? activity.medias[0].url
              : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
          title: activity.name,
          subtitle: activity.date && getFormattedDate(activity.date),
          subtitle2: activity.date && getFormattedTime(activity.date),
          footerText: activity.price
            ? 'Price: ' + activity.price + '€'
            : 'Free',
          onPress: () => {
            navigation.navigate('activity', {
              id: activity.id,
            });
          },
        };
      }),
    );

    setLoading(false);
  };

  useEffect(() => {
    getActivities();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Activities</Text>
        </View>
        <View style={styles.content}>
          {activities && activities.length > 0 && (
            <HorizontalCardList data={activities} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollView: {
    marginLeft: 25,
    marginTop: 35,
    flex: 1,
  },
  header: {marginBottom: 15},
  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  titleArea: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
});

export default Activities;
