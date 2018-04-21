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
  componentWillReceiveProps() {
    console.log('Home componentWillReceiveProps')
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
          <View>
            <Text style={{color: 'blue', fontSize: 16}}>{item.username}</Text>
            <Text>{item.name}</Text>
          </View>
        </Link>
      </View>
    )
  }

  render() {
    const { users, sortedUserIds } = this.props
    return (
      <View style={{flex: 1}}>
        <Link to="/home/discover-people" style={{ padding: 20 }}>
          <Text>Go To DiscoverPeople</Text>
        </Link>
        <FlatList
          data={sortedUserIds.map(id => users[id])}
          keyExtractor={item => item.id}
          renderItem={this.renderUser} />
      </View>
    )
  }
}

export default Home
