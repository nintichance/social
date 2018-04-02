import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet, ImageBackground, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons'
import axios from 'axios'

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

    storeUser = async(username) => {
            AsyncStorage.setItem('loggedInUser', username)
            this.displayData()
    }

    displayData = async() => {
        try{
            let user = await AsyncStorage.getItem('loggedInUser')
            alert(user)
        }
        catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    style={{ flex: 1, 
                    resizeMode: 'cover', 
                    justifyContent: 'center', 
                    alignItems: 'center' }} 
                    source={{ uri: "https://i.imgur.com/T4qH7h3.jpg" }}>
                   <KeyboardAvoidingView 
                    behavior='padding' 
                    style={styles.keyBoardView}>
                        <Text>{this.state.username}</Text>
                        <Text>{this.state.password}</Text>
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
      backgroundColor: '#fff',
    },
    keyBoardView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.001)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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