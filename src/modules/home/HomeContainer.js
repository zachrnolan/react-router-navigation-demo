import { connect } from 'react-redux'
import Home from './Home'

export default connect(
  state => ({
    users: state.getIn(['users', 'users']).toJS(),
    sortedUserIds: state.getIn(['users', 'sortedUserIds']).toJS(),
  })
)(Home)
