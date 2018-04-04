import React, { Component } from 'react'
import { View, Text, List, ListItem, FlatList, StyleSheet } from 'react-native'
import FeedView from './FeedView'
import NavBar from './NavBar'
import Footer from './Footer'

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
                <NavBar />
                <Footer />
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
    }
})

export default Feed