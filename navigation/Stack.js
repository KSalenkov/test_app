import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { w } from '../constants';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import AuthScreen from '../screens/AuthScreen';


const StackNavigator = createStackNavigator(
    
    {
        Start: {
            screen: StartScreen,
            navigationOptions: () => ({
                // title: 'Start',
                // headerShown: false,
                header: null,
            }),
        },
        Auth: {
            screen: AuthScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Sign In',
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
            screen: MainTabNavigator,
            navigationOptions: () => ({
                title: 'Tabs',
            }),
        },
    }
);

export default StackNavigator;