import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { w } from '../constants';

import tabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';


const StackNavigator = createStackNavigator(
    
    {
        
        Start: {
            screen: StartScreen,
            navigationOptions: () => ({
                header: null,
            }),
        },
        Auth: {
            screen: AuthScreen,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.name}`,
                headerStyle: {
                    backgroundColor: '#C4C4C4',
                },
                headerTitleStyle: {
                    width: w-145,
                    textAlign: 'center',
                }
            }),
        },
        Tabs: {
            screen: tabNavigator
        },
        
    },
    {
        initialRouteName: 'Start'
    }
);

tabNavigator.navigationOptions = ({navigation}) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
    let titleTab = '';
    // console.log(navigation.state.params);
    if (routeName == 'TabOneStack') {
        titleTab = 'Tab 1'
    } else if (routeName == 'TabTwoStack') {
        titleTab = 'Tab 2'
    } else if (routeName == 'TabThreeStack') {
        titleTab = 'Tab 3'
    } else {
        titleTab = 'Tab 4'
    };
    return {
        title: titleTab,
        headerStyle: {
            backgroundColor: '#C4C4C4',
        },
        headerTitleStyle: {
            width: w-145,
            textAlign: 'center',
        }
    }
  };

export default StackNavigator;