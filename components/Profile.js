import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import Feed from './Feed'
import FeedView from './FeedView'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

class Profile extends Component{
    state = {
        username: '',
        imageUrl: '',
        feed: ''
    }
    componentWillMount(){
        this.displayUser()
        this.getFeed()
    }

    getFeed = async() => {
        try{
            const today = new Date()
            console.log(today)
            const feedData = await axios.get('https://bfsharingapp.bluefletch.com/feed', today)
            const feed = feedData.data
            this.setState({feed: feed})
        }
        catch(error){
            console.log(error)
        }
    }

    displayUser = async() => {
        try{
            const userData = await axios.get('https://bfsharingapp.bluefletch.com/user')
            const user = userData.data
            const username = user.username
            const imageUrl = user.imageUrl
            this.setState({username: username, imageUrl: imageUrl})
        }
        catch(error){
            console.log(err)
        }
    }
    render(){
        if (this.state.imageUrl === '' || this.state.username === '') {
            console.log("Not loaded")
            return (
                <View style={styles.activity}>
                    <ActivityIndicator large />
                </View>
            )
          }
        return(
            <View>
                <ScrollView>
                        <View style={styles.navContainer}>
                            <TouchableOpacity onPress={()=>Actions.feed()}><Image style={{ width: 200, height: 50 }} source={{ uri: 'https://i.imgur.com/EmGU0lD.png?1' }} /></TouchableOpacity>
                            <View style={styles.logoutContainer}>
                                <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                                <TouchableOpacity>
                                    <Text style={styles.logout}>logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.profileContainer}>
                            <TouchableHighlight style={styles.editButton}>
                                <Text style={styles.name}>Edit Picture</Text>
                            </TouchableHighlight>
                            <Image style={styles.profilePicture} source={{uri: `https://bfsharingapp.bluefletch.com/${this.state.imageUrl}` }}/>
                            <Text style={styles.name}>{this.state.username}</Text>
                            <Text style={styles.name}>{`@${this.state.username}`}</Text>
                        </View>
                        <FlatList 
                            data={this.state.feed}
                            renderItem={(post)=> <FeedView
                                                        postContent = {post.item.postText}
                                                        user = {post.item.postUser}
                                                        comments={post.item.comments}
                                                        postId={post.item._id}/>}
                            keyExtractor={(post)=>post._id}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navContainer: {
        backgroundColor: '#0D50D4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileContainer: {
        backgroundColor: '#0D50D4',
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicture: {
        width: 110, 
        height: 110, 
        borderRadius: 55,
        borderWidth: 4,
        borderColor: '#F7FCFF',
        marginBottom: 30
    },
    littlePicture: {
        width: 40, 
        height: 40, 
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#F7FCFF',
        marginRight: 10
    },
    name: {
        color: '#F7FCFF',
        fontSize: 24
    },
    logout: {
        color: '#7A7A7A',
        fontSize: 18,
        marginRight: 10
    },
    logoutContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    editButton: {
        borderWidth: 2,
        borderColor: '#F7FCFF',
        padding: 5,
        marginBottom: 50
    },
    activity: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Profile