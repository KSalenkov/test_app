import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { w } from '../../constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppNavigator from '../../navigation/AppNavigator';


const BtnDown = ({title, press}) => {
    const { btnBox, btn } = styles;
    return (
        <View style={btnBox}>
            <Button
                style={btn}
                color="#EB5757"
                title={title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnBox: {
        width: w - 40,
        paddingBottom: 20,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})

export { BtnDown }