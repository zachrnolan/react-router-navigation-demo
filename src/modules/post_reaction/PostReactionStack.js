import React, { Component } from 'react'
import { Navigation, Card } from 'react-router-navigation'
import PostReaction from './PostReaction'

class PostReactionStack extends Component {
  componentDidMount() {
    console.log('PostReactionStack componentDidMount')
  }
  componentWillUnmount() {
    console.log('PostReactionStack componentWillUnmount')
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
