import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ProgressBarAndroid, ImageBackground } from 'react-native';
import { w, h } from '../constants';
import * as ImagePicker from 'expo-image-picker';
import ProgressImage from '../src/ProgressImage';
import ProgressBtn from '../src/ProgressBtn';


class TabTwoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      loadingStart: false,
      loadingEnd: false
    }
  }

  render() {
    
    const { 
      container, 
      
      imageContainer,
      loadedImage
    } = styles;
    const { image, loadingStart, loadingEnd } = this.state;
  
    return (
      <View style={container}>
        
        
        
        <ProgressImage
          thumbnailSource={require('../src/img/no_thumb.png')}
          source={{uri: image}}
          loadingStart={this.state.loadingStart}
          onLoad={() => {
            this.setState({loadingEnd: true})
          }}
        >
          
        </ProgressImage>       
        

        <ProgressBtn
          loadingStart={loadingStart}
          loadingEnd={loadingEnd}
          press={this._getImage}
        />
        
      </View>
    )
  }

  _getImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1
    });

    this.setState({image: result.uri, loadingStart: true})

  };

}

TabTwoScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#828282',
    width: w,
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    flex: 1,
  },
  imageContainer: {
    width: w-100, 
    height: h*0.6,
    borderRadius: 15,
    marginTop: h/50,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center'
  },
  loadedImage: {
    width: w-100, 
    height: h*0.6,
    borderRadius: 15,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default TabTwoScreen;
