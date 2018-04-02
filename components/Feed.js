import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import axios from 'axios'

class Feed extends Component{
    componentWillMount(){
        this.getFeed()
    }

    getFeed = async() => {
        try{
            const feedData = axios.get('https://bfsharingapp.bluefletch.com/feed')
            const feed = feedData._55
            console.log(feedData)
        }
        catch(error){
            console.log(error)
        }
    }

    render(){
        return(
            <View>
                <Text>
                    Hello from Feed
                </Text>
            </View>
        )
    }
}

export default Feed