import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Discover extends Component {
  componentDidMount() {
    console.log('Discover componentDidMount')
  }
  componentWillUnmount() {
    console.log('Discover componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Discover</Text>
      </View>
    )
  }
}

export default Discover
