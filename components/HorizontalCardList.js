import React from 'react';
import {View, StyleSheet} from 'react-native';
import HorizontalCard from './HorizontalCard';

const HorizontalCardList = ({data}) => {
  return (
    <View style={styles.tabContent}>
      {data?.map(item => (
        <HorizontalCard
          key={item.id}
          imageLink={item.image}
          title={item.title}
          subtitle={item.subtitle}
          subtitle2={item.subtitle2}
          footerText={item.footerText}
          style={styles.eventCard}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {marginTop: 30},
  eventCard: {marginBottom: 15},
});
export default HorizontalCardList;
