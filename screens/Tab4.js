import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { width, height } from '../constants/SizeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Animation from '../components/Animation'

class TabFourScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      push: false,
      grad: -1,
      upOrDown: 'up'
    }
  }

  gradAnimation = () => {
    
    let jey = () => {
      let { grad, upOrDown, push } = this.state;
      if(!push) {
        clearInterval(idInterval)
      }
      if (grad>0.8) {
        this.setState({upOrDown: 'down'})
      } else if (grad<(-0.8)) {
        this.setState({upOrDown: 'up'})
      }

      
      
      this.setState({
        grad: Animation(grad, upOrDown),
      })
    }

    const idInterval = setInterval(jey,300) 
  }

  _onPress = () => {    
    
    if (!this.state.push) {
      this.setState({push: true})
      this.gradAnimation();
    } else {
      this.setState({
        push: false,
        grad: -1
      })
      
    }
  }

  render() {
    const { container, gradientStyle, gradientOff, btnBox, btnTouchOn, btnTouchOff, titleStyle } = styles;

    const HideGradient = () => {
      if (this.state.push) {
        return (
          <LinearGradient
            colors={['#eb231c', '#197907']}
            style={gradientStyle}
            start={[0, this.state.grad]}
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
            onPress={this._onPress}
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
    width: width,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  gradientStyle: {
    width: width-200,
    height: height*0.532,
  },
  gradientOff: {
    display: 'none',
  },
  btnBox: {
    width: width - 40,
    paddingBottom: height/24.8,
    marginTop: height/10,
  },
  btnTouchOn: {
    width: width - 40,
    height: height/20.7,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnTouchOff: {
    width: width - 40,
    height: height/20.7,
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