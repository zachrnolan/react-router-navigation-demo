import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import Activity from './Activity'

class ActivityStack extends Component {
  componentDidMount() {
    console.log('ActivityStack componentDidMount')
  }
  componentWillUnmount() {
    console.log('ActivityStack componentWillUnmount')
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
