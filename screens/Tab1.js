import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function TabOneScreen() {
  return (
    <View>              
      <Text>Экран 1</Text>
    </View>


  );
}

TabOneScreen.navigationOptions = {
  header: null,
};