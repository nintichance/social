import React, { Component } from 'react'
import { View, Text, TextInupt, Image, StyleSheet, TouchableOpacity } from 'react-native'

class CommentView extends Component{
    render(){
        console.log("HELOJFL", this.props.commentContent)
        return(
            <View style={styles.commentContainer}>
                <Text>
                    {this.props.commentContent}
                </Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    commentContainer:{
        backgroundColor: '#D1DFE8'
    }
})
export default CommentView