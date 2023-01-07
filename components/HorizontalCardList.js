import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HorizontalCard from './HorizontalCard';

const HorizontalCardList = ({data, placeholder}) => {
  return (
    <View style={styles.tabContent}>
      {!data ||
        (data?.length === 0 && (
          <Text style={styles.noDataText}>
            {placeholder ? placeholder : 'No data'}
          </Text>
        ))}
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
  tabContent: {marginTop: 30, minHeight: '100%'},
  eventCard: {marginBottom: 15},
  noDataText: {position: 'absolute', top: '30%', left: '40%'},
});
export default HorizontalCardList;
