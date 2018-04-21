import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { install } from 'redux-loop'
import history from './history'
import reducer from './reducer'

const historyMiddleware = routerMiddleware(history)

const enhancer = compose(
  install(),
  applyMiddleware(historyMiddleware),
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
)

const store = createStore(reducer, null, enhancer)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevToolsCompose(store)
}

export default store
