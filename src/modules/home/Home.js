import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import * as UserState from '../../redux/UserState'

class Home extends Component {
  componentDidMount() {
    console.log('Home componentDidMount')
    this.props.dispatch(UserState.getUsers())
  }
  componentWillUnmount() {
    console.log('Home componentWillUnmount')
  }

  renderUser = ({item}) => {
    return (
      <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
        <Link
          to={{
            pathname: `/home/profile/${item.id}`,
            state: {
              username: item.username
            }
          }}>
          <Text style={{color: 'blue', fontSize: 16}}>{item.username}</Text>
        </Link>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Link to="/home/discover-people" style={{ padding: 20 }}>
          <Text>Go To DiscoverPeople</Text>
        </Link>
        <FlatList
          data={this.props.users}
          keyExtractor={item => item.id}
          renderItem={this.renderUser} />
      </View>
    )
  }
}

export default Home
