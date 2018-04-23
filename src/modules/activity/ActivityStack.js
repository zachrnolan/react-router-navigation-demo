import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import log from '../../utils/debug'
import Activity from './Activity'

class ActivityStack extends Component {
  componentDidMount() {
    log('ActivityStack componentDidMount')
  }
  componentWillUnmount() {
    log('ActivityStack componentWillUnmount')
  }
  render() {
    return (
      <Navigation backButtonTitle=' '>
        <Card
          exact path='/activity'
          title='Activity'
          component={Activity} />
      </Navigation>
    )
  }
}

export default ActivityStack
