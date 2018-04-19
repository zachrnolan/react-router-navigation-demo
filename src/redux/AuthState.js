import { Map } from 'immutable'

const initialState = Map({
  user: Map({
    id: '1',
    username: 'zachnolan',
    name: 'Zach Nolan',
    biography: '#1 Duster',
    email: 'zachrnolan@gmail.com',
  })
})

export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
