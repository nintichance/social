import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'

class Profile extends Component{
    componentWillMount(){
        this.displayUser()
    }

    displayUser = async() => {
        try{
           const user = await AsyncStorage.getItem('loggedInUser')
            alert("HELLO", user)
            console.log(user)
        }   
        catch(error){
            console.log(error)
        }
    }

    render(){
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