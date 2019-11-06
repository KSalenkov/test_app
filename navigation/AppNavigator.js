import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import StackNavigator from './Stack';


const AppNavigator = createAppContainer(StackNavigator,
  {
    initialRouteName: 'Start'
  }  
);

export default AppNavigator;