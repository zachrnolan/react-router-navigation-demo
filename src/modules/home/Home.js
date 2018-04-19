import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

class Home extends Component {
  componentDidMount() {
    console.log('Home componentDidMount')
  }
  componentWillUnmount() {
    console.log('Home componentWillUnmount')
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
        <Link to="/home/discover-people">
          <Text>Go To DiscoverPeople</Text>
        </Link>
      </View>
    )
  }
}

export default Home
