import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage, StyleSheet } from 'react-native'
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
                    <View style={styles.profileContainer}>
                    <Image style={{width: 110, height: 110, borderRadius: 55}} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/>
                    <Text>{this.state.username}</Text>
                    <Text>{`@${this.state.username}`}</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        backgroundColor: '#0D50D4',
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
 

})

export default Profile