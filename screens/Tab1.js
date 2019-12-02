import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';
import { width } from '../constants/SizeScreen';
import { connect } from 'react-redux';


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

    return (
      <View style={container}>
        <Text style={hello}>
          Привет, {this.props.login}!
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

const mapStateToProps = state => {
  return {
      login: state.auth.login
  }
}

export default connect(mapStateToProps) (TabOneScreen);