import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CommonStyles } from '../../common/styles';
import AsyncStorage from '@react-native-community/async-storage';
import { validateEmail } from '../../common/commonFun';
import { CommonActions } from '@react-navigation/native';


class LoginScreen extends Component {

    state = {
        emailAddress: '',
        password: ''
    }

    onLogin = () => {
        const { emailAddress, password } = this.state;

        if (!emailAddress) {
            alert('Please enter email')
        }
        else if (!validateEmail(emailAddress)) {
            alert('Please enter valid email')
        }
        else if (!password) {
            alert('Please enter Password')
        }
        else {
            AsyncStorage.setItem('loginStatus', JSON.stringify(true)).then((res) => {
                // this.props.navigation.navigate('Home')
                this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })
                );
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={CommonStyles.headerStyle}>
                    {'Login'}
                </Text>

                <Text style={CommonStyles.textInputHeaderStyle}>
                    {'Email Address'}
                </Text>
                <TextInput
                    placeholder={'Email Address'}
                    style={CommonStyles.textInputStyle}
                    value={this.state.emailAddress}
                    onChangeText={(email) => this.setState({ emailAddress: email })}
                    onSubmitEditing={() => this.PasswordTextInput.focus()}
                    returnKeyType={'next'}
                />

                <Text style={CommonStyles.textInputHeaderStyle}>
                    {'Password'}
                </Text>
                <TextInput
                    placeholder={'Password'}
                    style={CommonStyles.textInputStyle}
                    value={this.state.password}
                    onChangeText={(email) => this.setState({ password: email })}
                    ref={(input) => this.PasswordTextInput = input}
                    onSubmitEditing={() => this.onLogin()}
                    returnKeyType={'done'}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={() => this.onLogin()}
                    style={CommonStyles.buttonStyle}
                >
                    <Text style={CommonStyles.buttonTextStyle}>
                        {'LOGIN'}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
})

export default LoginScreen;