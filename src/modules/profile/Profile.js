import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import log from '../../utils/debug'
import * as UserState from '../../redux/UserState'

class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id || '',
      name: '',
    }
  }

  componentWillMount() {
    const { setNavigationState, users, user, match, location } = this.props
    const userProfile = users[match.params.id] || user // get user OR currently logged in user
    this.setState({name: userProfile.name})

    if (setNavigationState) setNavigationState('saveProfile', this.saveProfile)
    if (location && location.state && location.state.username) this.props.setNavigationState('profileTitle', location.state.username)
  }

  componentDidMount() {
    log('Profile componentDidMount')
  }

  componentWillUnmount() {
    log('Profile componentWillUnmount')
  }

  componentWillReceiveProps() {
    log('Profile componentWillReceiveProps')
  }

  saveProfile = () => {
    const user = {
      name: this.state.name
    }
    log('user: ', user, this.state.id)
    this.props.dispatch(UserState.updateUser(this.state.id, user))
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Link to='/home/media' style={styles.link}>
          <Text style={styles.linkText}>Go to Media</Text>
        </Link>
        <Link
          to={{
            pathname: `/home/profile/3456`,
            state: {
              username: 'christine'
            }
          }}
          style={styles.link}>
          <Text style={styles.linkText}>Go to Christines Profile</Text>
        </Link>
        <Text>Name:</Text>
        <TextInput
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          style={styles.input} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    width: 200,
    height: 40,
    padding: 10,
    marginTop: 10,
  },
  link: {
    marginBottom: 10
  },
  linkText: {
    color: 'blue'
  }
})

export default Profile
