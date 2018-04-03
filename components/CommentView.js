import React, { Component } from 'react'
import { View, Text, TextInupt, Image, StyleSheet, TouchableOpacity } from 'react-native'

class CommentView extends Component{
    render(){
        return(
            <View style={styles.comments}>
                <View style={styles.commentBubbles}>
                    <Text>
                        {this.props.commentContent}
                    </Text>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    comments:{
        backgroundColor: '#D1DFE8',
        paddingVertical: 10
    },
    commentBubbles:{
        backgroundColor: '#F7FCFF',
        padding: 10
    }
})

export default CommentView