import React, { Component } from 'react'
import { Text, View } from 'react-native'
import log from '../../utils/debug'

class Activity extends Component {
  componentDidMount() {
    log('Activity componentDidMount')
  }
  componentWillUnmount() {
    log('Activity componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Activity</Text>
      </View>
    )
  }
}

export default Activity
