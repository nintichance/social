import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux'


class Footer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity><Icon name='home' size={29} color='grey'/></TouchableOpacity>
                    <TouchableHighlight><View style={styles.button}><Text style={styles.textStyle}> + </Text></View></TouchableHighlight>
                <TouchableOpacity><Icon name='notifications' size={29} color='grey'/></TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDF5F4',
        height: 52,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 36,
        color: 'white',
    },
    button: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
})
export default Footer
