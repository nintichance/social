import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ flex: 1, 
                                          resizeMode: 'cover', 
                                          display: 'flex', 
                                          justifyContent: 'space-around', 
                                          alignItems: 'center'}} 
                                 source={{ uri: "https://i.imgur.com/LjvCh4t.jpg" }}>
                    <View style={styles.title}>  
                        <Image style={{ width: 375, height: 75 }} source={{ uri: 'https://i.imgur.com/EmGU0lD.png?1' }} />
                        <Text style={styles.textStyle}>Share updates. Connect with friends. Be social.</Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={()=> Actions.login()} style={styles.loginStyle}>
                            <Text style={styles.textStyle}>
                                <Icon name='account-circle' size={35} />
                                Login
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=> Actions.register()} style={styles.signUpStyle}>
                            <Text style={styles.textStyle}>
                                <Icon name='create' size={35} />
                                Sign Up
                            </Text>
                        </TouchableHighlight> 
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
        backgroundColor: '#0D50D4',
        marginBottom: 15
    },
    signUpStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
        backgroundColor: '#4AA8FF'
    }
})


export default Home