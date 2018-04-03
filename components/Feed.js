import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
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
            <View>
                <Text>
                    How can I get this to work?
                </Text>
                <FlatList 
                    data={this.state.feed}
                    renderItem={(post)=> <Text>{post.item.postText}</Text>}
                    keyExtractor={(post)=>post._id}/>
            </View>
        )
    }
}

export default Feed