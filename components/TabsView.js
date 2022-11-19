import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Text from './Text';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HorizontalCardList from './HorizontalCardList';

const renderScene = data => {
  return SceneMap(data);
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#007AFF'}}
    style={{
      backgroundColor: 'transparent',
      elevation: 0,
      borderBottomWidth: 0,
    }}
    renderLabel={({route, focused, color}) => (
      <Text style={{color: focused ? '#007AFF' : '#8A8A8E', fontSize: 16}}>
        {route.title}
      </Text>
    )}
  />
);

const TabsView = ({data}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(Object.keys(data).map(key => ({key, title: key})));

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene(data)}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      style={{minHeight: '100%'}}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
  },
  tabContent: {},
});
export default TabsView;
