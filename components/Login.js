import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons'

class Login extends Component {
    state = {
        username: '',
        password: ''
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
                   </KeyboardAvoidingView>
                   
                    {/* <TouchableHighlight  style={styles.loginStyle}>
                        <Text style={styles.textStyle}>
                            <Icon name='account-circle' size={35} />
                            Login
                        </Text>
                    </TouchableHighlight> */}
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
    },
    textStyle: {
        fontSize: 24,
        color: 'white'
    },
    loginStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
        backgroundColor: '#0D50D4'
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        padding: 10,
        margin: 10
    }
  })
  

export default Login