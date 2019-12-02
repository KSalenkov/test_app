import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    Button, 
    StyleSheet, 
    AsyncStorage 
} from 'react-native';
import { width } from '../constants/SizeScreen';



class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.pass = '1';
        this.state = {
            loginTrue: false,
            passTrue: false,
            login: '',
        };
    };
    
    saveLogin = (text) => {
        this.setState({login: text});
    }

    checkPass = (text) => {
        if (text == this.pass) {
            this.setState({passTrue: true});
        } else {
            this.setState({passTrue: false});
        }
    }
    
    render() {
        const { container, 
                inputBox, 
                inputItem, 
                btnBox, 
                btn, 
            } = styles;

        

        return (
            <KeyboardAvoidingView style={container} behavior="position" enabled>           
                <View style={inputBox}>
                    <TextInput
                        style={inputItem}                    
                        placeholder='Login'
                        onChangeText={login => this.saveLogin(login)}
                    />
                    <TextInput                       
                        style={inputItem}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={pass => this.checkPass(pass)}
                    />
                </View>
                <View style={btnBox}>
                    <Button
                        style={btn}
                        color="#EB5757"
                        title='Sign In'
                        onPress={this.checkPassAndGo}
                    />
                </View>   
            </KeyboardAvoidingView>
        )
    }

    saveValueFunction = () => {
        if (this.state.login) {
            AsyncStorage.setItem('login', this.state.login);
        }
    };

    checkPassAndGo = () => {
        if (this.state.passTrue) {
            this.props.navigation.navigate('Tabs');
            this.saveValueFunction();
            
        } else {
            alert('Неправильный пароль')
        };
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#828282',
        width: width,
        alignItems: 'center',
        justifyContent: 'flex-end',
        display: 'flex',
        flex: 1
    },
    inputBox: {
        marginBottom: 32,
    },
    inputItem: {
        width: width - 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#b9b7b7',
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingLeft: 8,
        marginBottom: 8,
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

export default AuthScreen;