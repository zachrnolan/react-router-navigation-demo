import React, { Component } from 'react'
import { Text, View } from 'react-native'
import log from '../../utils/debug'

class PostReaction extends Component {
  componentDidMount() {
    log('PostReaction componentDidMount')
  }
  componentWillUnmount() {
    log('PostReaction componentWillUnmount')
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
