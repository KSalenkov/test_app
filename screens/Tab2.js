import React, { Component } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { w } from '../constants';
import * as ImagePicker from 'expo-image-picker';


class TabTwoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://s3-alpha-sig.figma.com/img/e096/d20f/4fb60115d8a2aabb7b9777b69664276b?Expires=1574640000&Signature=WnaWyG9VayhmTWOm1508sYtUHZb3kje3V18a79Pw~XBQcqLY5NraGqtEOz9wtIhlBFQ6sU7zYYknBdQ4de08WHkx4GCjS5WKYVORlISQp6xVVhRJbLIesbHnlF2rSXkEGmRyVIHbPnMgsr3EQmr4smaPjmz9rjRGWr-rqzXdpobITbw~w4T~EIkR3BkBP2Tz3IgZ4J95KJYsHiAeLHrGoqebRTL4yD4WvIGBIS8-qALafDeoJIUCPKoaB6HWugQpWo~j6srb~zCfoex8n5CNHA318--fZl8ThvUzlBiwmpMJykQNW6gxsU1qMIA4AqbH-LdTqWUl~a2HOTul8y2uLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }
  }

  render() {
    const { container, btnBox, btn, imageStyle } = styles;
    const { image } = this.state;
    
    return (
      <View style={container}>
        <Image 
          style={imageStyle}
          source={{ uri: image }}
        />
        <View style={btnBox}>
          <Button
            style={btn}
            title='Upload Image'
            onPress={this._getImage}
          />
        </View>
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

    console.log(result);

    this.setState({image: result.uri})
  };

}

TabTwoScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#828282',
    width: w,
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
  imageStyle: {
    width: w-100, 
    height: 350,
    borderRadius: 20,
  },
  btnBox: {
    marginTop: 30,
    width: w - 40,
    paddingBottom: 20,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default TabTwoScreen;
