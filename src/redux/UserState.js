import { Map, List, fromJS } from 'immutable'
import { loop, Effects } from 'redux-loop'
import { goBack } from 'react-router-redux'
import _ from 'lodash'
import UserData from '../data/users.json'

const initialState = Map({
  users: Map({}),
  sortedUserIds: List([]),
})

const GET_USERS_REQUEST = 'UserState/GET_USERS_REQUEST'
const GET_USERS_SUCCESS = 'UserState/GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'UserState/GET_USERS_ERROR'

const UPDATE_USER = 'UserState/UPDATE_USER'

const wrapWithPromise = (ret) => {
  return new Promise(function(resolve) {
    resolve(ret)
  })
}

const formatUsers = users => {
  return _.chain(users)
    .groupBy(user => user.id)
    .mapValues(user => user[0])
    .value()
}

export function getUsers() {
  return {
    type: GET_USERS_REQUEST
  }
}

export async function getUsersAsync() {
  return await wrapWithPromise(UserData)
    .then(usersRaw => {
      console.log('usersRaw: ', usersRaw)
      const users = formatUsers(usersRaw)
      const sortedUserIds = usersRaw.map(user => user.id)
      return {
        type: GET_USERS_SUCCESS,
        payload: {
          users,
          sortedUserIds
        }
      }
    })
    .catch(error => {
      return {
        type: GET_USERS_ERROR,
        payload: {
          error
        }
      }
    })
}

export function updateUser(id, user) {
  return {
    type: UPDATE_USER,
    payload: {
      id,
      user,
    }
  }
}

export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case GET_USERS_REQUEST:
      return loop(
        state,
        Effects.promise(getUsersAsync)
      )

    case GET_USERS_SUCCESS:
      return state
        .set('users', fromJS(action.payload.users))
        .set('sortedUserIds', fromJS(action.payload.sortedUserIds))

    case GET_USERS_ERROR:
      return loop(
        state,
        Effects.constant(() => console.log(action.payload.error))
      )

    case UPDATE_USER:
      return loop(
        state.updateIn(['users', action.payload.id], user => user.merge(fromJS(action.payload.user))),
        Effects.constant(goBack())
      )

    default:
      return state
  }
}
