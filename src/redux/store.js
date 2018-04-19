import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import * as reduxLoop from 'redux-loop'
import createHistory from 'history/createMemoryHistory'
import reducer from './reducer'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const enhancer = compose(
  applyMiddleware(historyMiddleware),
  reduxLoop.install(),
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
)

const store = createStore(reducer, null, enhancer)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevToolsCompose(store)
}

export default store
