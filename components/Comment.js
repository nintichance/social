import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CommentView from './CommentView'
import axios from 'axios'

class Comment extends Component{
    state={
        commentText: ''
    }

    newComment = async() => {
        try{
            const postId = this.props.postId
            const username = this.props.username
            const commentText = this.state.commentText
            const response = await axios.post('https://bfsharingapp.bluefletch.com/comment', {username, postId, commentText})
        }
        catch(error){
            console.log(error)
        }
    }

    render(){
        return(
            <View>
                <FlatList 
                        data={this.props.comments}
                        renderItem={(comment)=> <CommentView commentContent={comment.item.commentText}/>}
                        keyExtractor={(comment)=>comment._id}/>
                  <View style={styles.postBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Let them know!"
                            onChangeText={(val)=> this.setState({commentText: val})}
                        />
                        <View style={styles.submit}>
                            <TouchableOpacity>
                                <Icon name='attach-file' size={29} color='grey'/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.newComment.bind(this)}>
                                <Text style={styles.postButton}>reply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    submit: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    postBox: {
        height: 300,
        backgroundColor: '#F7FCFF'
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
})
export default Comment