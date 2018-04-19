import React, { Component } from 'react'
import { Text } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { NativeRouter, Link } from 'react-router-native'
import { BottomNavigation, Tab } from 'react-router-navigation'
import Home from './Home'
import Discover from './Discover'
import PostReaction from './PostReaction'
import Activity from './Activity'
import Profile from './Profile'

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
                  component={Home}
                  label='Home' />
                <Tab
                  path='/discover'
                  component={Discover}
                  label='Discover' />
                <Tab
                  path='/post-reaction'
                  component={PostReaction}
                  label='Post Reaction' />
                <Tab
                  path='/activity'
                  component={Activity}
                  label='Activity' />
                <Tab
                  path='/profile'
                  component={Profile}
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
