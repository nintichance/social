import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Feed from './components/Feed'
import Post from './components/Post'
import PostShow from './components/PostShow'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='home' component={Home}  />
          <Scene key='login' component={Login}  />
          <Scene key='register'component={Register} />
          <Scene key='profile' component={Profile} />
          <Scene key='feed' component={Feed} initial/>
          <Scene key='post' component={Post} />
          <Scene key='postShow' component={PostShow}/>
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
