import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet } from 'react-native';
import { h, w } from '../constants';
import { createStackNavigator } from 'react-navigation-stack';
// import { BtnDown } from '../src/btns/BtnDown';

function AuthScreen () {
    const { container, image, btnBox, btn } = styles;

    console.log('test:', this.props);

    return (

        <View style={container}>
            <ImageBackground
                style={image}
                source={require('../src/img/image2.png')}
                imageStyle={{opacity:0.5}}
            >
                <View style={btnBox}>
                    <Button
                        style={btn}
                        color="#EB5757"
                        title='Start'
                        onPress={() => this.navigation.navigate('Main')}
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
    

const AuthStack = createStackNavigator(
    {
        auth: AuthScreen,
    },
    {
        headerMode: 'none',
    }
  );

  export default AuthStack;