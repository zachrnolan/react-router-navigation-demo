import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { BottomNavigation, Tab } from 'react-router-navigation'
import store from './redux/store'
import history from './redux/history'
import HomeStack from './modules/home/HomeStack'
import DiscoverStack from './modules/discover/DiscoverStack'
import PostReactionStack from './modules/post_reaction/PostReactionStack'
import ActivityStack from './modules/activity/ActivityStack'
import ProfileStack from './modules/profile/ProfileStackContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
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
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
