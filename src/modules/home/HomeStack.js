import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import Home from './HomeContainer'
import DiscoverPeople from '../discover_people/DiscoverPeople'
import Profile from '../profile/ProfileContainer'

class HomeStack extends Component {
  state = {
    profileTitle: ''
  }

  componentDidMount() {
    console.log('HomeStack componentDidMount')
  }

  componentWillUnmount() {
    console.log('HomeStack componentWillUnmount')
  }

  setNavigationState = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    return (
      <Navigation backButtonTitle=' '>
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
          render={(ownProps) => <Profile {...ownProps} setNavigationState={this.setNavigationState} />}
          title={this.state.profileTitle} />
      </Navigation>
    )
  }
}

export default HomeStack
