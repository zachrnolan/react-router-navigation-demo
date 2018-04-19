import { Map } from 'immutable'

const initialState = Map({
  users: []
})

export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
