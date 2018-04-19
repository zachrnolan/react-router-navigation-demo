import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import Profile from './Profile'

class ProfileStack extends Component {
  componentDidMount() {
    console.log('ProfileStack componentDidMount')
  }
  componentWillUnmount() {
    console.log('ProfileStack componentWillUnmount')
  }
  render() {
    return (
      <Navigation backButtonTitle=' '>
        <Card
          exact path='/profile'
          title='Profile'
          component={Profile} />
      </Navigation>
    )
  }
}

export default ProfileStack
