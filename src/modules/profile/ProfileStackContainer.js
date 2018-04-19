import { connect } from 'react-redux'
import ProfileStack from './ProfileStack'

export default connect(
  state => ({
    user: state.getIn(['auth', 'user']).toJS()
  })
)(ProfileStack)
