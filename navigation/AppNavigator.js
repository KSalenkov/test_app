import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  }),
  
  createStackNavigator(
    {    
      Start: StartScreen,
      Home: HomeScreen
    }
  )

);

const BtnNavigator = createStackNavigator(
  {    
    Start: StartScreen,
  }
)
