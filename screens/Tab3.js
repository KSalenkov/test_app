import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { width } from '../constants/SizeScreen';

class TabThreeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 900000,
      pressBtn: false,
    }
  };

  btnOnOrOff = () => {

    if (!this.state.pressBtn) {
      this.setState({pressBtn: true});
      this.timer()
    } else {
      this.setState({
        time: 900000,
        pressBtn: false,
      });
    }

  }

  timer = () => {
    
    timeUpdate = () => {
      let nowTime = this.state.time;
      if (nowTime == 0 || !this.state.pressBtn) {
        clearInterval(timeInterval);
      } else {
        this.setState({time: nowTime-1000})
      }
    }

    let timeInterval = setInterval(timeUpdate, 1000);
  }

  render() {
    const { container, btnBox, btnTouch, timeStyle } = styles;
    
    const {time} = this.state;
    
    function timeVisible(t, e) {
      
      if (e == true) {
        let seconds = Math.floor((t/1000) % 60 ),
          minuts = Math.floor((t/1000/60) % 60 );

        function addZero(num) {
          if(num <= 9) {
              return '0' + num;
          } else {
              return num;
          }
        }

        return (
          `${addZero(minuts)} : ${addZero(seconds)}`
        )
      } else {
          return (
            'Set Time'
          )
      }
            
    }

    return (
      <View style={container}>
        <View style={btnBox}>
          <TouchableOpacity
            style={btnTouch}
            onPress={this.btnOnOrOff}
          >
            <Text style={timeStyle}>{timeVisible(time, this.state.pressBtn)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
}

TabThreeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: '#828282',
    width: width,
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
  btnBox: {
    width: width - 40,
    marginBottom: 60,
  },
  btnTouch: {
    width: width - 40,
    height: 40,
    backgroundColor: '#5e97d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  timeStyle: {
    color: '#fff',
    fontSize: 20,
  },
});

export default TabThreeScreen;