import React, { Component } from 'react';
import { View, ImageBackground, Image, ProgressBarAndroid, StyleSheet } from 'react-native';
import { width, height } from '../constants/SizeScreen'


class ProgressImage extends Component {
    render() {
        const { imageContainer, backgroundImage, loadedImage } = styles;

        const {
            thumbnailSource,
            source,
            loadingStart,
            ...props
        } = this.props;

        if (!loadingStart) {
            return (
            
                <View style={imageContainer}>
                
                    <ImageBackground
                        
                        source={thumbnailSource}
                        style={backgroundImage}
                        imageStyle={{borderRadius: 27}}
                    />
                    
                </View>
            )
        } else {
            return (
                <View style={imageContainer}>
                    <ProgressBarAndroid
                        styleAttr='Large'
                        color='#adadad'
                    />
                    <Image
                        {...props}
                        source={source}
                        style={loadedImage}
                    />
                </View>
            )
        }
        
        
    }
}



const styles = StyleSheet.create({
    imageContainer: {
        width: width-100, 
        height: height*0.6,
        borderRadius: 27,
        marginTop: height/50,
        backgroundColor: '#c4c4c4',
        justifyContent: 'center'
      },
      backgroundImage: {
        width: width-100,
        height: height*0.6,
        borderRadius: 27,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      loadedImage: {
        width: width-100, 
        height: height*0.6,
        borderRadius: 27,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
})

export default ProgressImage;