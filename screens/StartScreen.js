import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { h, w } from '../constants';
import { BtnDown } from '../src/btns/BtnDown';

export default function StartScreen () {
    const { container, image, btnBox, btn } = styles;
    return (
        <View style={container}>
            <ImageBackground
                style={image}
                source={require('../src/img/image.png')}
                imageStyle={{opacity:0.5}}
            >
                <View style={btnBox}>
                    <Button
                        style={btn}
                        color="#EB5757"
                        title='Start'
                        onPress={() => AppNavigator.navigation.navigate('Home')}
                    />
                </View>
                
                {/* <BtnDown title='Start' press={() => this.props.navigation.navigate('AppNavigator')} /> */}
                
            </ImageBackground>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: h,
        width: w,
    
    },
    image: {
        flex: 1,
        height: h,
        width: w,
        backgroundColor:'transparent',
        justifyContent: 'flex-end',
        alignItems: 'center',        
    },
    btnBox: {
        width: w - 40,
        paddingBottom: 20,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
})
    

