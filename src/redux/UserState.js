import { Map, List, fromJS } from 'immutable'
import { loop, Effects } from 'redux-loop'
import UserData from '../data/users.json'

const initialState = Map({
  users: List([])
})

const GET_USERS_REQUEST = 'UserState/GET_USERS_REQUEST'
const GET_USERS_SUCCESS = 'UserState/GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'UserState/GET_USERS_ERROR'

const wrapWithPromise = (ret) => {
  return new Promise(function(resolve) {
    resolve(ret)
  })
}

export function getUsers() {
  return {
    type: GET_USERS_REQUEST
  }
}

export async function getUsersAsync() {
  return await wrapWithPromise(UserData)
    .then(users => {
      console.log('users: ', users)
      return {
        type: GET_USERS_SUCCESS,
        payload: {
          users
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

export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case GET_USERS_REQUEST:
      return loop(
        state,
        Effects.promise(getUsersAsync)
      )

    case GET_USERS_SUCCESS:
      return state.set('users', fromJS(action.payload.users))

    case GET_USERS_ERROR:
      return loop(
        state,
        Effects.constant(() => console.log(action.payload.error))
      )

    default:
      return state
  }
}
