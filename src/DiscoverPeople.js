import React, { Component } from 'react'
import { Text, View } from 'react-native'

class DiscoverPeople extends Component {
  componentDidMount() {
    console.log('DiscoverPeople componentDidMount')
  }
  componentWillUnmount() {
    console.log('DiscoverPeople componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>DiscoverPeople</Text>
      </View>
    )
  }
}

export default DiscoverPeople
