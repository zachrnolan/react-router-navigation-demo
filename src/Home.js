import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
  componentDidMount() {
    console.log('Home componentDidMount')
  }
  componentWillUnmount() {
    console.log('Home componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
      </View>
    )
  }
}

export default Home
