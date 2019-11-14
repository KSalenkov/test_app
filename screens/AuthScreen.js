import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    Button, 
    StyleSheet, 
    AsyncStorage 
} from 'react-native';
import { w } from '../constants';



class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.login = 'User';
        this.pass = '1';
        this.params = {},
        this.state = {
            loginTrue: 'false',
            passTrue: 'false',
            login: '',
        };
    };
    
    
    render() {
        const { container, inputBox, inputItem, btnBox, btn } = styles;

        const saveValueFunction = () => {
           
            if (this.state.login) {
                AsyncStorage.setItem('login', this.state.login);
                // this.setState({ login: '' })
            }
        };

        const UselessTextInput = function(props) {
            return (
                <TextInput
                    {...props}
                    style={inputItem}
                />
            )
        };

        return (

            <KeyboardAvoidingView style={container} behavior="position" enabled>           
               <View style={inputBox}>
                    <UselessTextInput                      
                        placeholder='Login'                        
                        onChangeText={(login) => {
                            this.state.login = login;
                            
                        }}
                    />
                    <UselessTextInput                       
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(pass) => {
                            if (pass == this.pass) {
                                this.state.passTrue = 'true';
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
                            if (this.state.passTrue == 'true') {
                                this.props.navigation.navigate('Tabs', this.params);
                                saveValueFunction();
                                
                            } else {
                                this.state.messeg = 'Неправильный логин или пароль';
                                alert('Неправильный логин или пароль')
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
        backgroundColor: '#828282',
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