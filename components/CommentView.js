import React, { Component } from 'react'
import { View, Text, TextInupt, Image, StyleSheet, TouchableOpacity } from 'react-native'

class CommentView extends Component{
    render(){
        console.log("HELOJFL", this.props.commentContent)
        return(
            <View>
                <Text>
                    {this.props.commentContent}
                </Text>
            </View>
        )
    }
}

export default CommentView