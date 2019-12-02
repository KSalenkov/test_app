import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet } from 'react-native';
import { width, height } from '../constants/SizeScreen';


class StartScreen extends Component {
    
    render() {
        const { container, image, btnBox, btn } = styles;
        return (
            <View style={container}>
                <ImageBackground
                    style={image}
                    source={require('../assets/images/image.png')}
                    imageStyle={{opacity:0.5}}
                >
                    <View style={btnBox}>
                        <Button
                            style={btn}
                            color="#EB5757"
                            title='Start'
                            onPress={() => this.props.navigation.navigate('Auth')}
                        />
                    </View>
                </ImageBackground>
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,    
    },
    image: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor:'transparent',
        justifyContent: 'flex-end',
        alignItems: 'center',        
    },
    btnBox: {
        width: width - 40,
        paddingBottom: 20,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
})

export default StartScreen;