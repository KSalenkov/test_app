import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';
import { w } from '../constants';



class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.login = 'User';
        this.pass = '123123';
        this.state = {
            loginTrue: 'false',
            passTrue: 'false',
        };
    }    
    
    render() {
        const { container, inputBox, inputItem, btnBox, btn } = styles;

        return (

            <KeyboardAvoidingView style={container} behavior="position" enabled>           
               <View style={inputBox}>
                    <TextInput
                        style={inputItem} 
                        placeholder='Login'
                        onChangeText={(login) => {
                            if (login == this.login) {
                                console.log('true', login);
                                this.state.loginTrue = 'true';
                                console.log('login', this.loginTrue)
                            } else {
                                this.state.loginTrue = 'false';
                            }
                        }}
                    />
                    <TextInput
                        style={inputItem} 
                        placeholder='Password'
                        onChangeText={(pass) => {
                            if (pass == this.pass) {
                                console.log('true', pass);
                                this.state.passTrue = 'true';
                                console.log('pass', this.state.passTrue)
                            } else {
                                this.state.passTrue = 'false';
                            }
                        }}
                    />
               </View>
                <View style={btnBox}>
                    <Button
                        style={btn}
                        color="#EB5757"
                        title='Sign In'
                        onPress={() => {
                            if (this.state.loginTrue == 'true' && this.state.passTrue == 'true') {
                                this.props.navigation.navigate('Tabs');
                            } else {
                                this.state.messeg = 'Неправильный логин или пароль';
                            };
                        }}
                    />
                </View>   
            </KeyboardAvoidingView>




        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        width: w,
        alignItems: 'center',
        justifyContent: 'flex-end',
        display: 'flex',
        flex: 1
    },
    inputBox: {
        marginBottom: 32,
    },
    inputItem: {
        width: w - 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#b9b7b7',
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingLeft: 8,
        marginBottom: 8,
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
    

export default AuthScreen;