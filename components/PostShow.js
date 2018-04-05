import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet, FlatList } from 'react-native'
import NavBar from './NavBar'
import Footer from './Footer'
import Icon from 'react-native-vector-icons/MaterialIcons'


class PostShow extends Component{
    
    render(){
        return(
            <View>
                <NavBar />
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
                            renderItem={(comment)=> <View>
                                <Text>{comment.item.commentText}</Text>
                            </View>}
                            keyExtractor={(comment)=>comment._id}/>
                    </View>
                    <Footer />
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    // postShow:{
    //     height: 700
    // },
    postBody: {
        backgroundColor: '#F7FCFF'
    },
    comments: {
        backgroundColor: '#D1DFE8'
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
export default PostShow