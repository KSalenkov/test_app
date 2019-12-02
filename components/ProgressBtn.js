import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { width, height } from '../constants/SizeScreen'


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
        marginTop: height/31,
        width: width - 40,
        height: height/15,
        marginBottom: height/31,
    },
    btn: {
        width: width - 40,
        height: height/15,
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