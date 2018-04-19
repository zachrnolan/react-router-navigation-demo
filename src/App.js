import React, { Component } from 'react'
import { Text } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { NativeRouter, Link } from 'react-router-native'
import { BottomNavigation, Tab } from 'react-router-navigation'
import HomeStack from './home/HomeStack'
import DiscoverStack from './discover/DiscoverStack'
import PostReactionStack from './post_reaction/PostReactionStack'
import ActivityStack from './activity/ActivityStack'
import ProfileStack from './profile/ProfileStack'

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route
            path="/"
            render={() => (
              <BottomNavigation>
                <Tab
                  path='/home'
                  component={HomeStack}
                  label='Home' />
                <Tab
                  path='/discover'
                  component={DiscoverStack}
                  label='Discover' />
                <Tab
                  path='/post-reaction'
                  component={PostReactionStack}
                  label='Post Reaction' />
                <Tab
                  path='/activity'
                  component={ActivityStack}
                  label='Activity' />
                <Tab
                  path='/profile'
                  component={ProfileStack}
                  label='Profile' />
              </BottomNavigation>
            )}
          />
        </Switch>
      </NativeRouter>
    )
  }
}

export default App
