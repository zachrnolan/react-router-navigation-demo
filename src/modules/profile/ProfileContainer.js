import { connect } from 'react-redux'
import Profile from './Profile'

export default connect(
  state => ({
    user: state.getIn(['auth', 'user']).toJS(),
    users: state.getIn(['users', 'users']).toJS(),
  })
)(Profile)
