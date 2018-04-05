import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux'

class FeedView extends Component{

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
                            <TouchableOpacity onPress={()=> Actions.postShow({username: this.props.user.username, 
                                                                              comments: this.props.comments, 
                                                                              postContent: this.props.postContent,
                                                                              postId: this.props.postId})}><Icon name='mode-comment' size={29} color='#BDBDBD'/></TouchableOpacity>
                        </View>    
                </View>
                <Text style={styles.postText}>
                    {this.props.postContent} You create the dream - then you bring it into your world. All you need to paint is a few tools, a little instruction, and a vision in your mind. Anytime you learn something your time and energy are not wasted. That's crazy
                </Text>
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