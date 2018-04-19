import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Profile extends Component {
  componentDidMount() {
    console.log('Profile componentDidMount')
  }
  componentWillUnmount() {
    console.log('Profile componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile</Text>
      </View>
    )
  }
}

export default Profile
