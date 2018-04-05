import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet, ImageBackground, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    loggedInUser = 'username'

    login = async() => {
        try{
            const username = this.state.username
            const password = this.state.password
            const response = await axios.post('https://bfsharingapp.bluefletch.com/login', {username, password})
            const user = response.data
            this.storeUser(user.username)
        }
        catch(error){
            console.log(error)
        }
    }

    storeUser = async(user) => {
            AsyncStorage.setItem('loggedInUser', user)
            Actions.feed()
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    style={{ flex: 1, 
                             display: 'flex',
                             resizeMode: 'cover' }} 
                    source={{ uri: "https://i.imgur.com/T4qH7h3.jpg" }}>
                   <KeyboardAvoidingView 
                        behavior='padding' 
                        style={styles.keyBoardView}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                onChangeText={(val)=> this.setState({username: val})}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(val)=> this.setState({password: val})}
                                secureTextEntry={true}
                            />
                        </View>
                            <TouchableHighlight 
                            style={styles.loginStyle}
                            onPress={this.login.bind(this)}>
                                <Text style={styles.textStyle}>Login</Text>
                            </TouchableHighlight>
                   </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    keyBoardView: {
        height: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.001)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 100
    },
    textStyle: {
        fontSize: 24,
        color: 'white'
    },
    loginStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#0D50D4'
    },
    input: {
        height: 50,
        width: 390,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        padding: 10,
        backgroundColor: '#F7FCFF'
    }
  })
  

export default Login