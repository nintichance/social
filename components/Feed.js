import React, { Component } from 'react'
import { View, Text, List, ListItem, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FeedView from './FeedView'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

class Feed extends Component{
    state = {
        feed: []
    }

    componentWillMount(){
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

    render(){
        console.log("YOOO", this.state.feed)
        return(
                <View style={styles.container}>
                    <View style={styles.navBar}>
                        <TouchableOpacity onPress={()=> Actions.feed()}><Image style={{ width: 200, height: 50, paddingHorizontal: 10 }} source={{uri: 'https://i.imgur.com/ZsKkXw1.png'}}/></TouchableOpacity>
                        <View style={styles.logout}>
                            <TouchableOpacity onPress={()=>Actions.profile()}><Image style={styles.logoutPicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/></TouchableOpacity>
                            <TouchableOpacity onPress={()=>{this.logout()}} ><Text style={styles.logoutText}>logout</Text></TouchableOpacity>
                        </View>
                    </View>
                        <FlatList 
                            data={this.state.feed}
                            renderItem={(post)=> <FeedView
                                                        postContent = {post.item.postText}
                                                        user = {post.item.postUser}
                                                        comments={post.item.comments}
                                                        postId={post.item._id}/>}
                            keyExtractor={(post)=>post._id}/>
                  
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6ECF0'
    },
    navBar: {
        height: 55,
        backgroundColor: '#F7FCFF',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoutPicture: {
        width: 36, 
        height: 36, 
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#F7FCFF'
    },
    logout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    logoutText: {
        color: '#7A7A7A',
        fontSize: 18,
        paddingHorizontal: 10
    }
})

export default Feed