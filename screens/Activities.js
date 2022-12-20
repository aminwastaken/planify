import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import TabsView from '../components/TabsView';
import GlobalContext from '../GlobalContext';
import HorizontalCardList from '../components/HorizontalCardList';
import {getFormattedDate, getFormattedTime} from '../utils/format';

const Activities = ({navigation, children}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  const getActivities = async () => {
    const response = await fetch(global.apiUrl + 'activities', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    const activities = await response.json();

    const upcoming = [];
    const past = [];

    activities.activities.forEach(activity => {
      const formattedActivity = {
        id: activity.id,
        image:
          activity.medias && activity.medias.length > 0
            ? activity.medias[0].url
            : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
        title: activity.name,
        subtitle: activity.date && getFormattedDate(activity.date),
        subtitle2: activity.date && getFormattedTime(activity.date),
        footerText: activity.price ? 'Price: ' + activity.price + '€' : 'Free',
        onPress: () => {
          navigation.navigate('activity', {
            id: activity.id,
          });
        },
      };
      console.log('current activity ', activity.name);
      console.log('activity date', activity.date);

      if (new Date(activity.date) < new Date()) {
        past.push(formattedActivity);
      } else {
        upcoming.push(formattedActivity);
      }
    });

    setUpcomingActivities(upcoming);
    setPastActivities(past);
    // } catch (error) {
    //   console.log('error', error);
    // }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.scrollView}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Activities</Text>
        </View>
        <View style={styles.content}>
          <TabsView
            data={{
              upcoming: () => <HorizontalCardList data={upcomingActivities} />,
              past: () => <HorizontalCardList data={pastActivities} />,
            }}
          />
        </View>
      </View>
    </View>
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
