import React from 'react';
import {View} from 'react-native';
import Text from '../components/Text';

const destinations = [
  {
    id: 'item2',
    image: 'https://cdn.pariscityvision.com/library/image/5542.jpg',
    title: 'Notre Dame Cathedral',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    subtitle: {icon: 'location-outline', text: 'Paris'},
  },
  {
    id: 'item3',
    image:
      'https://cdn.getyourguide.com/img/location/5b06b2ad0949d.jpeg/88.webp',
    title: 'Palace of Versailles',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    subtitle: {icon: 'location-outline', text: 'Paris'},
  },
  {
    id: 'item1',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20842_e98a166f199a380b378efb6f017e3f03.jpg?ver=1477297873',
    title: 'Louvre Museum',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    subtitle: {icon: 'location-outline', text: 'Paris'},
  },
];

const upcomingActivities = [
  {
    id: 'item1',
    activity: {
      id: 'item2',
      image: 'https://cdn.pariscityvision.com/library/image/5542.jpg',
      title: 'Notre Dame Cathedral',
      url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
      subtitle: {icon: 'location-outline', text: 'Paris'},
      location: 'Paris',
    },
    startDate: '2020-01-01',
    endDate: null,
  },
  {
    id: 'item2',
    activity: {
      id: 'item3',
      image:
        'https://cdn.getyourguide.com/img/location/5b06b2ad0949d.jpeg/88.webp',
      title: 'Palace of Versailles',
      url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
      subtitle: {icon: 'location-outline', text: 'Paris'},
      location: 'Paris',
    },
    startDate: '2020-02-07',
    endDate: null,
  },
  {
    id: 'item3',
    activity: {
      id: 'item1',
      image:
        'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20842_e98a166f199a380b378efb6f017e3f03.jpg?ver=1477297873',
      title: 'Louvre Museum',
      url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
      subtitle: {icon: 'location-outline', text: 'Paris'},
      location: 'Paris',
    },
    startDate: '2020-02-07',
    endDate: '2020-02-08',
  },
];

const moreDestinations = [
  {
    id: 'item2',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20887_ed41a037b7621b84228d673e7edec896.jpg?ver=1477298047',
    title: 'Luxembourg park',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    subtitle: {icon: 'location-outline', text: 'Paris'},
  },
  {
    id: 'item3',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20905_208cfcc257a889002227594b5fd7a9ae.jpg?ver=1477298085',
    title: 'Disneyland Paris',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    subtitle: {icon: 'location-outline', text: 'Paris'},
  },
  {
    id: 'item1',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20896_0863c5af95f18a8cb78a34a2e00977a8.jpg?ver=1477298063',
    title: 'Moulin Rouge',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    subtitle: {icon: 'location-outline', text: 'Paris'},
  },
];

const notreDamePhotos = [
  {
    id: 'item2',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20887_ed41a037b7621b84228d673e7edec896.jpg?ver=1477298047',
  },
  {
    id: 'item3',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20905_208cfcc257a889002227594b5fd7a9ae.jpg?ver=1477298085',
  },
  {
    id: 'item1',
    image:
      'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20896_0863c5af95f18a8cb78a34a2e00977a8.jpg?ver=1477298063',
  },
];

const notreDame = {
  imageUrl: 'https://cdn.pariscityvision.com/library/image/5542.jpg',
  title: 'Notre Dame',
};

export {
  destinations,
  moreDestinations,
  notreDame,
  notreDamePhotos,
  upcomingActivities,
};
