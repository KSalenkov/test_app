import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ShowScreen() {
  return (
    <View style={styles.container}>
     
      
    </View>
  );
}

ShowScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
});
