import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

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
        <Link to="/discover/discover-people">
          <Text>Go To DiscoverPeople</Text>
        </Link>
      </View>
    )
  }
}

export default Discover
