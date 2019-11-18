import React, { Component } from 'react';
import { View, ImageBackground, Image, ProgressBarAndroid, StyleSheet } from 'react-native';
import { w, h } from '../constants'


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
        width: w-100, 
        height: h*0.6,
        borderRadius: 27,
        marginTop: h/50,
        backgroundColor: '#c4c4c4',
        justifyContent: 'center'
      },
      backgroundImage: {
        width: w-100,
        height: h*0.6,
        borderRadius: 27,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      loadedImage: {
        width: w-100, 
        height: h*0.6,
        borderRadius: 27,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
})

export default ProgressImage;