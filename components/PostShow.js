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

    editComment = async() => {
        try{
            
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
                            <View style={styles.postHeader}>
                                <View style={styles.userInfo}>
                                    <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                                        <View style={styles.userName}>
                                            <Text >{this.props.username}</Text>
                                            <Text>{`@${this.props.username}`}</Text>
                                        </View>
                                </View>
                                        <View style={styles.react}>
                                            <TouchableOpacity><Icon name='favorite' size={29} color='#BDBDBD'/></TouchableOpacity>
                                            <TouchableOpacity onPress={()=>Actions.postShow()}><Icon name='mode-comment' size={29} color='#BDBDBD'/></TouchableOpacity>
                                        </View>    
                            </View>
                            <Text style={styles.postText}>
                                    {this.props.postContent} 
                            </Text>
                        </View>    
                        <View style={styles.comments}>
                            <FlatList 
                                data={this.props.comments}
                                renderItem={(comment)=> 
                                    <View style={styles.commentBubble}>
                                        <Text style={styles.commentTextStyle}>{comment.item.commentText}</Text>
                                        <TouchableOpacity onPress={this.editComment.bind(this)}>
                                            <Text style = {styles.editText}>
                                                edit
                                            </Text>
                                        </TouchableOpacity>
                                    </View>}
                                keyExtractor={(comment)=>comment._id}/>
                        </View>
                            <View style={styles.postBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Let them know!"
                                    onChangeText={(val)=> this.setState({commentText: val})}
                                />
                                <TouchableOpacity onPress={this.newComment.bind(this)}
                                                  style={styles.postButtonContainer}>
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
    postHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },
    comments: {
        backgroundColor: '#D1DFE8',
        paddingVertical: 5
    },
    commentBubble: {
        backgroundColor: '#F7FCFF',
        borderRadius: 50,
        margin: 5,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        display: 'flex'
    },
    editText: {
        alignSelf: 'flex-end',
        paddingRight: 20,
        paddingBottom: 20
    },
    commentTextStyle:{
        paddingHorizontal: 20,
        paddingTop: 20
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
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    userName: {
        paddingTop: 20
    },
    postText: {
        padding: 15
    },
    react: { 
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 10
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
        fontSize: 16,
        alignSelf: 'flex-end',
        paddingRight: 10
    },
    postButtonContainer: {
        display: 'flex'
    },
    input: {
        padding: 10,
        paddingBottom: 100,
        display: 'flex',
        justifyContent: 'flex-start'

    },
})
export default PostShow