import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import StartStack from '../screens/StartScreen';
import AuthStack from '../screens/AuthScreen';



const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
    Start: StartStack,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Start'
  }
  
  )
)

export default AppNavigator;