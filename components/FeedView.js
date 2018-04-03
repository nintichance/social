import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

class FeedView extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.userInfo}>
                    <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                    <View>
                        <Text>{this.props.user.username}</Text>
                        <Text>{`@${this.props.user.username}`}</Text>
                    </View>    
                </View>
                <Text>
                    {this.props.postContent}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F7FCFF',
      margin: 5
    },
    littlePicture: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#F7FCFF'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row'
    }
  })
  

export default FeedView