import React from 'react';
import {View} from 'react-native';

const Logout = props => {
  const {setToken} = props.route.params;
  global.token = '';
  setToken('');
  return <View></View>;
};

export default Logout;
