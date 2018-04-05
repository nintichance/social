import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet, FlatList, ScrollView } from 'react-native'
import NavBar from './NavBar'
import Footer from './Footer'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'

class PostShow extends Component{
    state={
        commentText: ''
    }

    newComment = async() => {
        try{
            console.log("CLICKED")
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
                <ScrollView>
                    <View style={styles.postShow}>
                        <View style={styles.postBody}>
                            <View style={styles.userInfo}>
                                <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                                <View style={styles.topStructure}>
                                    <View style={styles.userName}>
                                        <Text >{this.props.username}</Text>
                                        <Text>{`@${this.props.username}`}</Text>
                                    </View>
                                    <View style={styles.react}>
                                        <TouchableOpacity><Icon name='favorite' size={29} color='grey'/></TouchableOpacity>
                                        <TouchableOpacity onPress={()=>Actions.postShow()}><Icon name='mode-comment' size={29} color='grey'/></TouchableOpacity>
                                    </View>    
                                </View>
                            </View>
                            <Text style={styles.postText}>
                                {this.props.postContent} Fluff it up a little and hypnotize it. You can get away with a lot. This is gonna be a happy little seascape. The least little bit can do so much.
                            </Text>
                        </View>
                        <View style={styles.comments}>
                            <FlatList 
                                data={this.props.comments}
                                renderItem={(comment)=> 
                                    <View style={styles.commentBubble}>
                                        <Text style={styles.commentTextStyle}>{comment.item.commentText}Fluff it up a little and hypnotize it. You can get away with a lot. This is gonna be a happy little seascape. The least little bit can do so much.</Text>
                                    </View>}
                                keyExtractor={(comment)=>comment._id}/>
                        </View>
                            <View style={styles.postBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Let them know!"
                                    onChangeText={(val)=> this.setState({commentText: val})}
                                />
                                <TouchableOpacity onPress={this.newComment.bind(this)}>
                                    <Text style={styles.postButton}>reply</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

styles = StyleSheet.create({
    postBody: {
        backgroundColor: '#F7FCFF'
    },
    comments: {
        backgroundColor: '#D1DFE8',
        paddingVertical: 5
    },
    commentBubble: {
        backgroundColor: '#F7FCFF',
        borderRadius: 40,
        margin: 5,
        marginHorizontal: 10,
        paddingHorizontal: 5
    },
    commentTextStyle:{
        padding: 10
    },
    littlePicture: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#F7FCFF',
        margin: 10
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    userName: {
        paddingTop: 20
    },
    postText: {
        padding: 15
    },
    react: { 
        display: 'flex',
        flexDirection: 'row'
    },
    topStructure: {
        display: 'flex',
        flexDirection: 'row'
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
        paddingBottom: 200,
        display: 'flex',
        justifyContent: 'flex-start'

    },
})
export default PostShow