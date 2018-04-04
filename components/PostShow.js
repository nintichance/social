import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import NavBar from './NavBar'
import Footer from './Footer'
import Icon from 'react-native-vector-icons/MaterialIcons'


class PostShow extends Component{
    
    render(){
        return(
            <View>
                <NavBar />
                <View style={styles.postShow}>
                    <View style={styles.postBody}>
                        <View style={styles.userInfo}>
                            <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                            <View style={styles.topStructure}>
                                <View style={styles.userName}>
                                    <Text >USERNAME</Text>
                                    <Text>USERNAME</Text>
                                </View>
                                <View style={styles.react}>
                                    <TouchableOpacity><Icon name='favorite' size={29} color='grey'/></TouchableOpacity>
                                    <TouchableOpacity onPress={()=>Actions.postShow()}><Icon name='mode-comment' size={29} color='grey'/></TouchableOpacity>
                                </View>    
                            </View>
                        </View>
                        <Text style={styles.postText}>
                            {this.props.postContent} I am adding to the content to see if the container size will change. I am not quite sure if it would but here's goes nothing. What is your name? My name is NInti Chance. How are tou doin?
                        </Text>
                    </View>
                    <View style={styles.comments}>
                        <Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Text>
                    </View>
                    <Footer />
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    // postShow:{
    //     height: 700
    // },
    postBody: {
        backgroundColor: '#F7FCFF'
    },
    comments: {
        backgroundColor: '#D1DFE8'
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
export default PostShow