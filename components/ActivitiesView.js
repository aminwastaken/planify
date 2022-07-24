import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import EventCard from './EventCard';
import UpcomingActivities from './UpcomingActivities';
import PastActivities from './PastActivities';

const renderScene = SceneMap({
  upcoming: UpcomingActivities,
  past: PastActivities,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#007AFF'}}
    style={{
      backgroundColor: 'transparent',
      elevation: 0,
      // shadowOpacity: 0,
      borderBottomWidth: 0,
    }}
    renderLabel={({route, focused, color}) => (
      <Text style={{color: focused ? '#007AFF' : '#8A8A8E', fontSize: 16}}>
        {route.title}
      </Text>
    )}
  />
);

const ActivitiesView = () => {
  //   const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'past', title: 'Past'},
  ]);

  return (
    // <View style={styles.mainContainer}>
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={{height: 100, width: 100}}
      renderTabBar={renderTabBar}
      style={{minHeight: '100%'}}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'yellow',
  },
  tabContent: {},
});
export default ActivitiesView;
