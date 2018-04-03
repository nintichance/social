import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import CommentView from './CommentView'


class Comment extends Component{
    render(){
        console.log("GOODBYEGHHFJGS", this.props.comments)
        return(
            <View>
                <FlatList 
                        data={this.props.comments}
                        renderItem={(comment)=> <CommentView commentContent={comment.item.commentText}/>}
                        keyExtractor={(comment)=>comment._id}/>
            </View>
        )
    }
}
export default Comment