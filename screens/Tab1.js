import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  AsyncStorage,
} from 'react-native';
import { width } from '../constants/SizeScreen';


class TabOneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forPicker: {},
      login: '',
    } 
  }
  
  

  render() {
    const { container, hello, picker } = styles;
    
    const getValueFunction = () => {
        
      AsyncStorage.getItem('login').then(value =>
        
        this.setState({ login: value })
        
      );
    };

    getValueFunction();

    return (
      <View style={container}>
        <Text style={hello}>
          Привет, {this.state.login}!
        </Text>
        <Picker
          style={picker}
          selectedValue={this.state.forPicker}
          
          onValueChange={(itemValue) => 
            this.setState({forPicker: itemValue})
          }>
            <Picker.Item label="Drop down list" value="" />
            <Picker.Item label="1 state" value="1 state" />
            <Picker.Item label="2 state" value="2 state" />
           
        </Picker>
      </View>
    )
  };
  
  
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#828282',
      width: width,
      alignItems: 'center',
      display: 'flex',
      flex: 1
  },
  hello: {
    marginTop: 50,
    marginBottom: 70,
    fontSize: 25,
    color: '#fff',
  },
  picker: {
    height: 40,
    width: width-40,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
})

TabOneScreen.navigationOptions = {
    header: null,
  }


export default TabOneScreen;