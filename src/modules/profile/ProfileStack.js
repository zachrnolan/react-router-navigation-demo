import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import Profile from './ProfileContainer'

class ProfileStack extends Component {
  componentDidMount() {
    console.log('ProfileStack componentDidMount')
  }

  componentWillUnmount() {
    console.log('ProfileStack componentWillUnmount')
  }

  render() {
    console.log('props: ', this.props)
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
