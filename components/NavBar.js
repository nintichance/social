import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

class NavBar extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Hello from NavBar</Text>
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
        }
    }
})


export default NavBar