import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import StartScreen from './screens/StartScreen';

export default class App extends Component {
  
  render() {
    
    return (
      <View>
        <StartScreen />
      </View>
    )

  }

}