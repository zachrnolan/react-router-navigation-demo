import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import log from '../../utils/debug'
import Home from './HomeContainer'
import DiscoverPeople from '../discover_people/DiscoverPeople'
import Profile from '../profile/ProfileContainer'

class HomeStack extends Component {
  state = {
    profileTitle: '',
    saveProfile: null,
  }

  componentDidMount() {
    log('HomeStack componentDidMount')
  }

  componentWillUnmount() {
    log('HomeStack componentWillUnmount')
  }

  setNavigationState = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const { location } = this.props
    return (
      <Navigation
        backButtonTitle=' '
        renderRightButton={() => {
          if (location.pathname.includes('/home/profile/')) {
            return (
              <TouchableOpacity onPress={this.state.saveProfile} style={{ paddingRight: 10 }}>
                <Text>Save</Text>
              </TouchableOpacity>
            )
          } else {
            return null
          }
        }}>
        <Card
          exact path='/home'
          title='Latest Reactions'
          component={Home} />
        <Card
          exact path='/home/discover-people'
          title='Discover People'
          component={DiscoverPeople} />
        <Card
          exact path='/home/profile/:id'
          render={(ownProps) => <Profile {...ownProps} setNavigationState={this.setNavigationState} saveProfile={this.saveProfile} />}
          title={this.state.profileTitle} />
      </Navigation>
    )
  }
}

export default HomeStack
