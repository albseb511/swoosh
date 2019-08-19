import React, {Fragment} from 'react';
import {
  ScrollView,
} from 'react-native';

import TabNav from './src/router/TabNavigator'

console.disableYellowBox = true;

import {createBottomTabNavigator,createAppContainer} from 'react-navigation'

const App = () => {
  return (
    <ScrollView>
      <Explore/>

      <Listing/>
    </ScrollView>
  );
};




export default TabNav;
