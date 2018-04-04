import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

class NavBar extends Component{
    state = {
        loggedIn: true
    }
    logout = async() => {
        try{
            await AsyncStorage.clear()
            console.log("CLICKED")
            Actions.home()
            this.setState({loggedIn: false})
        }
        catch(error){
            console.log(error)
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> Actions.feed()}><Image style={{ width: 200, height: 50, paddingHorizontal: 10 }} source={{uri: 'https://i.imgur.com/ZsKkXw1.png'}}/></TouchableOpacity>
                <View style={styles.logout}>
                    <TouchableOpacity onPress={()=>Actions.profile()}><Image style={styles.littlePicture} source={{uri: 'https://i.imgur.com/WBXzxcm.jpg?1' }}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.logout()}} ><Text style={styles.logoutText}>logout</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#F7FCFF',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    littlePicture: {
        width: 36, 
        height: 36, 
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#F7FCFF'
    },
    logout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    logoutText: {
        color: '#7A7A7A',
        fontSize: 18,
        paddingHorizontal: 10
    }
})


export default NavBar