import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import log from '../../utils/debug'
import PostReaction from './PostReaction'

class PostReactionStack extends Component {
  componentDidMount() {
    log('PostReactionStack componentDidMount')
  }
  componentWillUnmount() {
    log('PostReactionStack componentWillUnmount')
  }
  render() {
    return (
      <Navigation backButtonTitle=' '>
        <Card
          exact path='/post-reaction'
          title='Post Reaction'
          component={PostReaction} />
      </Navigation>
    )
  }
}

export default PostReactionStack
