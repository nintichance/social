import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Comment from './Comment'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux'

class FeedView extends Component{
    state = {
        showComments: false
    }
    
    showComments = () => {
        if(this.state.showComments === false){
            this.setState({showComments: true})
        }
        else{
            this.setState({showComments: false})
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                            <View style={styles.userName}>
                                <Text style={{fontSize: 18}}>{this.props.user.username}</Text>
                                <Text style={{color: '#7A7A7A'}}>{`@${this.props.user.username}`}</Text>
                            </View>
                    </View>
                        <View style={styles.reactContainer}>
                            <TouchableOpacity onPress={()=> Actions.editPost({postId: this.props.postId, originalPostContent: this.props.postContent})} ><Icon name='mode-edit' size={29} color='#BDBDBD'/></TouchableOpacity>
                            <TouchableOpacity><Icon name='favorite' size={29} color='#BDBDBD'/></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.showComments()}><Icon name='mode-comment' size={29} color='#BDBDBD'/></TouchableOpacity>
                        </View>    
                </View>
                <Text style={styles.postText}>
                    {this.props.postContent} I am adding to the content to see if the container size will change. I am not quite sure if it would but here's goes nothing. What is your name? My name is NInti Chance. How are tou doin?
                </Text>
                {this.state.showComments? <Comment 
                                            comments={this.props.comments}
                                            postId={this.props.postId}
                                            username={this.props.user.username}/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F7FCFF',
      marginVertical: 5
    },
    littlePicture: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#F7FCFF',
        marginLeft: 10
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        paddingLeft: 10
    },
    postText: {
        padding: 15
    },
    reactContainer: { 
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 20,
        width: 100,
        justifyContent: 'space-between'
    },
    postHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    }
  })
  

export default FeedView