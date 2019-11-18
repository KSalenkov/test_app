import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { w, h } from '../constants'


class ProgressBtn extends Component {
    render() {
        const { 
            btnBox, 
            btn,
            btnDefault,
            titleBtn,
            btnLoading,
            } = styles;

        const {
            loadingStart,
            loadingEnd,
            press,
            ...props
        } = this.props;

        if (!loadingStart) {
            return(
                <View style={btnBox}>
                    <TouchableOpacity
                        {...props}
                        style={[btn, btnDefault]}
                        
                        onPress={press}
                    >
                        <Text style={titleBtn}>Upload Image</Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (!loadingEnd) {
            return(
                <View style={btnBox}>
                    <TouchableOpacity
                        {...props}
                        style={[btn, btnLoading]}
                    >
                        <Text style={titleBtn}>Upload Image</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return(
                <View style={btnBox}></View>
            )
        }
        
        
    }
}

const styles = StyleSheet.create({
    btnBox: {
        marginTop: h/31,
        width: w - 40,
        height: h/15,
        marginBottom: h/31,
    },
    btn: {
        width: w - 40,
        height: h/15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btnDefault: {
        backgroundColor: '#5e97d9',
    },
    titleBtn: {
        color: '#fff',
        fontSize: 20,
    },
    btnLoading: {
        backgroundColor: '#bdbdbd',
    }
})

export default ProgressBtn;