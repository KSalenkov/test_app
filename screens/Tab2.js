import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ProgressBarAndroid, ImageBackground } from 'react-native';
import { width, height } from '../constants/SizeScreen';
import * as ImagePicker from 'expo-image-picker';
import ProgressImage from '../components/ProgressImage';
import ProgressBtn from '../components/ProgressBtn';


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
    } = styles;
    const { image, loadingStart, loadingEnd } = this.state;
  
    return (
      <View style={container}>
        
        <ProgressImage
          thumbnailSource={require('../assets/images/no_thumb.png')}
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
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    flex: 1,
  },
  imageContainer: {
    width: width-100, 
    height: height*0.6,
    borderRadius: 15,
    marginTop: height/50,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center'
  },
  loadedImage: {
    width: width-100, 
    height: height*0.6,
    borderRadius: 15,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default TabTwoScreen;
