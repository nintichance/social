import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
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
                    <View>
                    <Image style={{width: 30, height: 30}} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                    <Text>{this.state.username}</Text>
                    <Text>{`@${this.state.username}`}</Text>
                    </View>
            </View>
        )
    }
}

export default Profile