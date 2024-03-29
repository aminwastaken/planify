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

const pastActivities = [
  {
    id: 'item2',
    activity: {
      id: 'item2',
      image:
        'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20887_ed41a037b7621b84228d673e7edec896.jpg?ver=1477298047',
      title: 'Luxembourg park',
      url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
      subtitle: 'Wednesday 12th May',
      subtitle2: 'at 10:00 AM',
      location: 'Paris',
    },
    startDate: '2020-02-07',
    endDate: '2020-02-08',
    startTime: {
      time: '10:00',
      ampm: 'AM',
    },
  },
  {
    id: 'item3',
    activity: {
      id: 'item3',
      image:
        'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20905_208cfcc257a889002227594b5fd7a9ae.jpg?ver=1477298085',
      title: 'Disneyland Paris',
      url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
      subtitle: {icon: 'location-outline', text: 'Paris'},
      location: 'Paris',
    },
    startDate: '2019-03-03',
    endDate: '2019-04-04',
    startTime: {
      time: '10:00',
      ampm: 'AM',
    },
  },
  {
    id: 'item4',
    activity: {
      id: 'item4',
      image:
        'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20896_0863c5af95f18a8cb78a34a2e00977a8.jpg?ver=1477298063',
      title: 'Moulin Rouge',
      url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
      subtitle: {icon: 'location-outline', text: 'Paris'},
      location: 'Paris',
    },
    startDate: '2019-05-06',
    endDate: '2019-06-06',
    startTime: {
      time: '10:00',
      ampm: 'AM',
    },
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
    id: 'item4',
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
  pastActivities,
};
