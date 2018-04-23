import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import log from '../../utils/debug'
import Profile from './ProfileContainer'

class ProfileStack extends Component {
  componentDidMount() {
    log('ProfileStack componentDidMount')
  }

  componentWillUnmount() {
    log('ProfileStack componentWillUnmount')
  }

  render() {
    return (
      <Navigation backButtonTitle=' '>
        <Card
          exact path='/profile'
          component={Profile}
          title={this.props.user.username} />
      </Navigation>
    )
  }
}

export default ProfileStack
