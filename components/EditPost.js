import React, { Component } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import NavBar from './NavBar'
import Footer from './Footer'

import { Actions } from 'react-native-router-flux'
import axios from 'axios'

class EditPost extends Component{
    state = {
        username: '',
        newPostText: ''
    }
    
    componentWillMount(){
        this.getUser()
    }

    getUser = async() => {
        try{
            const username = await AsyncStorage.getItem('loggedInUser')
            this.setState({username: username})
        }
        catch(error){
            console.log(error)
        }
    }


    newPost = async() => {
        try{
            console.log("Clicked")
            const id = this.props.postId
            const newPostText = this.state.newPostText
            const username = this.state.username
            const response = await axios.put(`https://bfsharingapp.bluefletch.com/post/${id}`, {id, newPostText, username})
            console.log(newPostText)
            this.redirect()
        }
        catch(error){
            console.log(error)
        }
    }

    redirect = () => {
        Actions.feed()
    }

    render(){
        console.log(this.props.postId)
        return(
            <View>
                <NavBar />
                    <KeyboardAvoidingView behavior='padding'
                                          style={styles.keyBoardView}>
                        <View style={styles.userInfo}>
                        <TouchableOpacity onPress={()=> Actions.profile()}><Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/></TouchableOpacity>
                                <View style={styles.userName}>
                                    <Text style={{fontSize: 18}}>{this.state.username}</Text>
                                    <Text style={{color: '#7A7A7A'}}>{`@${this.state.username}`}</Text>
                                </View> 
                        </View>
                        <Text style={styles.postText}>
                                {this.props.originalPostContent}
                        </Text>
                        <View style={styles.postBox}>
                            <TextInput
                                style={styles.input}
                                placeholder={this.props.originalPostContent}
                                onChangeText={(val)=> this.setState({newPostText: val})}
                            />
                            <View style={styles.submit}>
                                <TouchableOpacity><Icon name='attach-file' size={29} color='grey'/></TouchableOpacity>
                                <TouchableOpacity onPress={this.newPost.bind(this)}><Text style={styles.postButton}>update</Text></TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
  

export default EditPost
