import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import Home from './Home'
import DiscoverPeople from '../discover_people/DiscoverPeople'

class HomeStack extends Component {
  componentDidMount() {
    console.log('HomeStack componentDidMount')
  }
  componentWillUnmount() {
    console.log('HomeStack componentWillUnmount')
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
      </Navigation>
    )
  }
}

export default HomeStack
