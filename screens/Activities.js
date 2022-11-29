import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import TabsView from '../components/TabsView';
import GlobalContext from '../GlobalContext';
import HorizontalCardList from '../components/HorizontalCardList';

// const upcomingActivities = [
//   {
//     id: 'item1',
//     image: 'https://cdn.pariscityvision.com/library/image/5542.jpg',
//     title: 'Notre Dame Cathedral',
//     url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
//     subtitle: 'Wednesday 12th May',
//     subtitle2: 'at 10:00 AM',
//     footerText: 'Paris',
//   },
//   {
//     id: 'item2',
//     image:
//       'https://cdn.getyourguide.com/img/location/5b06b2ad0949d.jpeg/88.webp',
//     title: 'Palace of Versailles',
//     url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
//     subtitle: 'Wednesday 12th May',
//     subtitle2: 'at 10:00 AM',
//     footerText: 'Paris',
//   },
//   {
//     id: 'item3',
//     image:
//       'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20842_e98a166f199a380b378efb6f017e3f03.jpg?ver=1477297873',
//     title: 'Louvre Museum',
//     url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
//     subtitle: 'Wednesday 12th May',
//     subtitle2: 'at 10:00 AM',
//     footerText: 'Paris',
//   },
// ];

const Activities = ({navigation, children}) => {
  const {token, setToken} = useContext(GlobalContext);
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  const getActivities = async () => {
    console.log('test');
    // try {
    const response = await fetch(global.apiUrl + 'activities', {
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

    activities.forEach(activity => {
      const formattedActivity = {
        id: activity.id,
        image:
          activity.medias && activity.medias.length > 0
            ? activity.medias[0].url
            : 'https://blog.redbubble.com/wp-content/uploads/2017/10/placeholder_image_square.jpg',
        title: activity.name,
        subtitle: activity.date && activity.date,
        subtitle2: activity.date && 'time',
        footerText: activity.price && 'Price: ' + activity.price + '€',
      };
      console.log('activity date', activity.date);

      if (activity.date > new Date()) {
        past.push(formattedActivity);
      } else {
        upcoming.push(formattedActivity);
      }
    });

    console.log('upcoming', upcoming);
    console.log('past', past);

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
