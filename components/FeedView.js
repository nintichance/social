import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

class FeedView extends Component{
    render(){
        return(
            <View>
                <Text>
                    {this.props.postContent}
                </Text>
            </View>
        )
    }
}

export default FeedView