import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Feed from './components/Feed'
import Post from './components/Post'
import PostShow from './components/PostShow'
import EditPost from './components/EditPost'
import NavBar from './components/NavBar'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='home' component={Home}  initial/>
          <Scene key='login' component={Login}  />
          <Scene key='profile' component={Profile} />
          <Scene key='feed' component={Feed} />
          <Scene key='post' component={Post} />
          <Scene key='editPost' component={EditPost} />
          <Scene key='postShow' component={PostShow} />
        </Stack>
      </Router>    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
