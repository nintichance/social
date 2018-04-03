import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import CommentIndex from './CommentIndex'
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
        clicked = () => {
            console.log("Clicked!")
        }
        return(
            <View style = {styles.container}>
                <View style={styles.userInfo}>
                    <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                    <View style={styles.topStructure}>
                        <View style={styles.userName}>
                            <Text >{this.props.user.username}</Text>
                            <Text>{`@${this.props.user.username}`}</Text>
                        </View>
                        <View style={styles.react}>
                            <TouchableOpacity><Icon name='favorite' size={29} color='grey'/></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.showComments()}><Icon name='mode-comment' size={29} color='grey'/></TouchableOpacity>
                        </View>    
                    </View>
                </View>
                <Text style={styles.postText}>
                    {this.props.postContent} I am adding to the content to see if the container size will change. I am not quite sure if it would but here's goes nothing. What is your name? My name is NInti Chance. How are tou doin?
                </Text>
                {this.state.showComments? <CommentIndex /> : null}
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
    }
  })
  

export default FeedView