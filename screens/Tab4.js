import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { w } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

class TabFourScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      push: false,
    }
  }

  render() {
    const { container, gradientStyle, gradientOff, btnBox, btnTouch, titleStyle } = styles;

    const HideGradient = () => {
      if (this.state.push) {
        return (
          <LinearGradient
            colors={['#eb231c', '#52b375']}
            style={gradientStyle}
          />
        )
      } else {
        return (
          <LinearGradient
            colors={['#eb231c', '#52b375']}
            style={gradientOff}
          />
        )
      }
    }

    return (
      <View style={container}>
        <HideGradient />

        <View style={btnBox}>
          <TouchableOpacity
            style={btnTouch}
            onPress={() => {
              if (!this.state.push) {
                this.setState({push: true})
              } else {
                this.setState({push: false})
              }
            }}
            >
            <Text style={titleStyle}>Hide</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
}

TabFourScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#828282',
    width: w,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  gradientStyle: {
    width: w-200,
    height: 300,
    marginBottom: 100,
  },
  gradientOff: {
    display: 'none',
  },
  btnBox: {
    width: w - 40,
    paddingBottom: 25,
  },
  btnTouch: {
    width: w - 40,
    height: 35,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  titleStyle: {
    color: 'black',
    fontSize: 20,
  }
});

export default TabFourScreen;