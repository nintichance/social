import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, StyleSheet } from 'react-native'
import Feed from './Feed'
import { Actions } from 'react-native-router-flux'
import Footer from './Footer'
import axios from 'axios'

class Profile extends Component{
    state = {
        username: '',
        imageUrl: '',
    }
    componentWillMount(){
        this.displayUser()
    }

    displayUser = async() => {
        try{
            const userData = await axios.get('https://bfsharingapp.bluefletch.com/user')
            const user = userData.data
            const username = user.username
            const imageUrl = user.imageUrl
            this.setState({username: username, imageUrl: imageUrl})
        }
        catch(error){
            console.log(err)
        }
    }

    render(){
        console.log("HIIII", this.state.username, this.state.imageUrl)
        return(
            <View>
                        <View style={styles.navContainer}>
                            <TouchableOpacity onPress={()=>Actions.feed()}><Image style={{ width: 200, height: 50 }} source={{ uri: 'https://i.imgur.com/EmGU0lD.png?1' }} /></TouchableOpacity>
                            <View style={styles.navContainer}>
                                <Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                                <TouchableOpacity>
                                    <Text style={styles.logout}>logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.profileContainer}>
                            <TouchableHighlight style={styles.editButton}>
                                <Text style={styles.name}>Edit Picture</Text>
                            </TouchableHighlight>
                        <Image style={styles.profilePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                        <Text style={styles.name}>{this.state.username}</Text>
                        <Text style={styles.name}>{`@${this.state.username}`}</Text>
                        </View>
                        <Footer />
                        <Feed />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navContainer: {
        backgroundColor: '#0D50D4',
        display: 'flex',
        flexDirection: 'row'
    },
    profileContainer: {
        backgroundColor: '#0D50D4',
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicture: {
        width: 110, 
        height: 110, 
        borderRadius: 55,
        borderWidth: 4,
        borderColor: '#F7FCFF',
        marginBottom: 30
    },
    littlePicture: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#F7FCFF'
    },
    name: {
        color: '#F7FCFF',
        fontSize: 24
    },
    logout: {
        color: '#7A7A7A',
        fontSize: 18
    },
    editButton: {
        borderWidth: 2,
        borderColor: '#F7FCFF',
        padding: 5,
        marginBottom: 50
    }
})

export default Profile