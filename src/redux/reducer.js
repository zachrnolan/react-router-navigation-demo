import { Map } from 'immutable'
import { combineReducers } from 'redux-loop'
import { routerReducer } from 'react-router-redux'

import UserStateReducer from './UserState'

const reducers = {
  router: routerReducer,
  users: UserStateReducer,
}

const immutableStateContainer = Map()
const getImmutable = (child, key) => child ? child.get(key) : void 0
const setImmutable = (child, key, value) => child.set(key, value)

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable,
)

export default function mainReducer(state, action) {
  return namespacedReducer(state || void 0, action)
}
