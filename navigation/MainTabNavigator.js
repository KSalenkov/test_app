import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ShowScreen from '../screens/ShowScreen';

import { w } from '../constants'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ForTabsStyle = ({title}) => {
  return (
    <View style={styles.tabs}>
      <Text style={styles.titles}>{title}</Text>
    </View>
  )
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 1' />  
  
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 2' />  
  
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 3' />  
};

SettingsStack.path = '';

const ShowStack = createStackNavigator(
  {
    Show: ShowScreen,
  },
  config
);

ShowStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 4' />  
  
};

HomeStack.path = '';

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#C4C4C4",
    height: 60,
    width: w / 4,
    marginBottom: -27,
    paddingBottom: 27,
    borderColor: '#4F4F4F',
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
  },
  titles: {
    textAlign: 'center',
    marginTop: 14,
    fontFamily: 'Roboto',

  }
})

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  ShowStack,
});

tabNavigator.path = '';

export default tabNavigator;
