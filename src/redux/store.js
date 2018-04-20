import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { install } from 'redux-loop'
import createHistory from 'history/createMemoryHistory'
import reducer from './reducer'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const createPersistantStore = compose(
  install(),
  applyMiddleware(historyMiddleware),
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
)(createStore)

const store = createPersistantStore(reducer)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevToolsCompose(store)
}

export default store
