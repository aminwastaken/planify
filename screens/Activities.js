import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import TabsView from '../components/TabsView';
import GlobalContext from '../GlobalContext';
import HorizontalCardList from '../components/HorizontalCardList';

const upcomingActivities = [
  {
    id: 'item1',
    image: 'https://cdn.pariscityvision.com/library/image/5542.jpg',
    title: 'Notre Dame Cathedral',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    subtitle: 'Wednesday 12th May',
    subtitle2: 'at 10:00 AM',
    footerText: 'Paris',
  },
  {
    id: 'item2',
    image:
      'https://cdn.getyourguide.com/img/location/5b06b2ad0949d.jpeg/88.webp',
    title: 'Palace of Versailles',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    subtitle: 'Wednesday 12th May',
    subtitle2: 'at 10:00 AM',
    footerText: 'Paris',
  },
  {
    id: 'item3',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20842_e98a166f199a380b378efb6f017e3f03.jpg?ver=1477297873',
    title: 'Louvre Museum',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    subtitle: 'Wednesday 12th May',
    subtitle2: 'at 10:00 AM',
    footerText: 'Paris',
  },
];

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
              past: () => <HorizontalCardList data={upcomingActivities} />,
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
