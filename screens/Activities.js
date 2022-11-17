import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import TabsView from '../components/TabsView';
import GlobalContext from '../GlobalContext';
import {upcomingActivities} from '../data/destinations';
import {pastActivities} from '../data/destinations';
import HorizontalCardList from '../components/HorizontalCardList';

const Activities = ({navigation, children}) => {
  const {token, setToken} = useContext(GlobalContext);

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
