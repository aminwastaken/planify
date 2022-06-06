import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import {upcomingActivities} from '../data/destinations';
import EventCard from '../components/EventCard';

const UpcomingActivities = () => {
  const data = upcomingActivities;
  return (
    <View style={styles.tabContent}>
      {data.map(item => (
        <EventCard
          key={item.id}
          imageLink={item.activity.image}
          title={item.activity.title}
          startDate={item.startDate}
          endDate={item.endDate}
          location={item.activity.location}
          style={styles.eventCard}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {marginTop: 30},
  eventCard: {marginBottom: 15},
});
export default UpcomingActivities;
