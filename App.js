import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='login' component={Login} title='Login' initial/>
          <Scene key='register'component={Register} title='Sign Up'/>
        </Stack>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
