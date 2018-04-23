import React, { Component } from 'react'
import { Text, View } from 'react-native'
import log from '../../utils/debug'

class DiscoverPeople extends Component {
  componentDidMount() {
    log('DiscoverPeople componentDidMount')
  }
  componentWillUnmount() {
    log('DiscoverPeople componentWillUnmount')
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
