import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import log from '../../utils/debug'

class Media extends Component {
  componentDidMount() {
    log('Media componentDidMount')
  }
  componentWillUnmount() {
    log('Media componentWillUnmount')
  }
  componentWillReceiveProps() {
    log('Media componentWillReceiveProps')
  }
  render() {
    return (
      <View>
        <Link
          to={{
            pathname: `/home/profile/2345`,
            state: {
              username: 'geoffplitt'
            }
          }}>
          <Text>Go to Geoff's Profile</Text>
        </Link>
      </View>
    )
  }
}

export default Media
