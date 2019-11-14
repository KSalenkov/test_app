import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet } from 'react-native';
import { h, w } from '../constants';


class StartScreen extends Component {
    constructor(props) {
        super(props);
        this.params = {
            name: 'Sign In',
        }
    }
    
    
    
    render() {
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
                            onPress={() => this.props.navigation.navigate('Auth', this.params)}
                        />

                        {/* <BtnDown title='Start' onPress={() => this.props.navigation.navigate('auth')} /> */}


                    </View>
                    
                    
                    
                </ImageBackground>
                
            </View>
        )
    }

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
    

export default StartScreen;