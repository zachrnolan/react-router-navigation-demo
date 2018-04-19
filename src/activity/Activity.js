import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Activity extends Component {
  componentDidMount() {
    console.log('Activity componentDidMount')
  }
  componentWillUnmount() {
    console.log('Activity componentWillUnmount')
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
