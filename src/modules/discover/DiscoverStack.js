import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import log from '../../utils/debug'
import Discover from './Discover'
import DiscoverPeople from '../discover_people/DiscoverPeople'

class DiscoverStack extends Component {
  componentDidMount() {
    log('DiscoverStack componentDidMount')
  }
  componentWillUnmount() {
    log('DiscoverStack componentWillUnmount')
  }
  render() {
    return (
      <Navigation backButtonTitle=' '>
        <Card
          exact path='/discover'
          title='Discover'
          component={Discover} />
        <Card
          exact path='/discover/discover-people'
          title='Discover People'
          component={DiscoverPeople} />
      </Navigation>
    )
  }
}

export default DiscoverStack
