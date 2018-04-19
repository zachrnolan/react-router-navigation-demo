import React, { Component } from 'react'
import { Text, View } from 'react-native'

class PostReaction extends Component {
  componentDidMount() {
    console.log('PostReaction componentDidMount')
  }
  componentWillUnmount() {
    console.log('PostReaction componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>PostReaction</Text>
      </View>
    )
  }
}

export default PostReaction
