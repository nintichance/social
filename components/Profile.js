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
            const currentUser = AsyncStorage.getItem('loggedInUser')
            const userData = await axios.get('https://bfsharingapp.bluefletch.com/user')
            const user = userData.data
            const username = user.username
            const imageUrl = user.imageUrl
            this.setState({username: username, imageUrl: imageUrl})
        }
        catch(error){
            console.log(err)
        }
        // try{
        //    const user = await AsyncStorage.getItem('loggedInUser')
        //     alert("HELLO", user)
        //     console.log(user)
        // }   
        // catch(error){
        //     console.log(error)
        // }
    }

    render(){
        console.log("HIIII", this.state.username, this.state.imageUrl)
        return(
            <View>
                <Text>
                    Hello from Profile
                </Text>
            </View>
        )
    }
}

export default Profile