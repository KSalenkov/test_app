import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabOneScreen from '../screens/Tab1';
import TabTwoScreen from '../screens/Tab2';
import TabThreeScreen from '../screens/Tab3';
import TabFourScreen from '../screens/Tab4';

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

const TabOneStack = createStackNavigator(
  {
    Tab1: TabOneScreen,
  },
  config
);

TabOneStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 1' />,
  
};

TabOneStack.path = '';

const TabTwoStack = createStackNavigator(
  {
    Tab2: TabTwoScreen,
  },
  config
);

TabTwoStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 2' />
};

TabTwoStack.path = '';

const TabThreeStack = createStackNavigator(
  {
    Tab3: TabThreeScreen,
  },
  config
);

TabThreeStack.navigationOptions = {
  title: '',  
  tabBarIcon: () => <ForTabsStyle title='TAB 3' />  
};

TabThreeStack.path = '';

const TabFourStack = createStackNavigator(
  {
    Tab4: TabFourScreen,
  },
  config
);

TabFourStack.navigationOptions = {
  title: '',
  tabBarIcon: () => <ForTabsStyle title='TAB 4' />  
  
};

TabFourStack.path = '';

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
  TabOneStack,
  TabTwoStack,
  TabThreeStack,
  TabFourStack,
});

tabNavigator.path = '';

export default tabNavigator;
