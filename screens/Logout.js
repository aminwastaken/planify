import React, {useContext} from 'react';
import {View} from 'react-native';
import GlobalContext from '../GlobalContext';

const Logout = () => {
  const {token, setToken} = useContext(GlobalContext);
  setToken('');
  return <View></View>;
};

export default Logout;
