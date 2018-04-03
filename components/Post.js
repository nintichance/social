import React, { Component } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NavBar from './NavBar'
import Footer from './Footer'

import { Actions } from 'react-native-router-flux'
import axios from 'axios'

class Post extends Component{
    state = {
        postText: ''
    }
    render(){
        return(
            <View>
                <NavBar />
                <View style={styles.body}>
                    <View style={styles.userInfo}>
                        <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                            <View style={styles.userName}>
                                <Text>USERNAME</Text>
                                <Text>@USERNAME</Text>
                            </View> 
                    </View>
                    <View style={styles.postBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tell us about it..."
                            onChangeText={(val)=> this.setState({postText: val})}
                        />
                        <View style={styles.submit}>
                            <TouchableOpacity><Icon name='attach-file' size={29} color='grey'/></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.postButton}>post</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        height: 615
    },
    postBox: {
        height: 300,
        backgroundColor: '#F7FCFF'
    },
    submit: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    postButton: {
        color: '#0D50D4',
        fontSize: 20
    },
    input: {
        height: 250,
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'flex-start'

    },
    container: {
      backgroundColor: '#F7FCFF',
      marginVertical: 5
    },
    littlePicture: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#F7FCFF',
        margin: 10
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    userName: {
        paddingTop: 20
    },
    postText: {
        padding: 15
    },
    react: { 
        display: 'flex',
        flexDirection: 'row'
    },
    topStructure: {
        display: 'flex',
        flexDirection: 'row'
    }
  })
  

export default Post
