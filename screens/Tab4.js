import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { w, h } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

class TabFourScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      push: false,
    }
  }

  render() {
    const { container, gradientStyle, gradientOff, btnBox, btnTouchOn, btnTouchOff, titleStyle } = styles;

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

    const MyBtn = (props) => {
      if (this.state.push) {
        return (
          <TouchableOpacity
            {...props}
            style={btnTouchOn}
            >
            <Text style={titleStyle}>Hide</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity
            {...props}
            style={btnTouchOff}
            >
            <Text style={titleStyle}>Show</Text>
          </TouchableOpacity>
        )
      }
    }

    return (
      <View style={container}>
        <HideGradient />

        <View style={btnBox}>
          <MyBtn
            onPress={() => {
              if (!this.state.push) {
                this.setState({push: true})
              } else {
                this.setState({push: false})
              }
            }}
          />
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
    backgroundColor: '#828282',
    width: w,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  gradientStyle: {
    width: w-200,
    height: h*0.532,
  },
  gradientOff: {
    display: 'none',
  },
  btnBox: {
    width: w - 40,
    paddingBottom: h/24.8,
    marginTop: h/10,
  },
  btnTouchOn: {
    width: w - 40,
    height: h/20.7,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnTouchOff: {
    width: w - 40,
    height: h/20.7,
    backgroundColor: '#2d9cdb',
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