import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import * as UserState from '../../redux/UserState'

class Profile extends Component {

  constructor(props) {
    super(props)
    console.log('props: ', props)
    this.state = {
      id: props.match.params.id || '',
      name: '',
    }
  }

  componentWillMount() {
    const { setNavigationState, users, match } = this.props
    const user = users[match.params.id]
    this.setState({name: user.name})

    if (setNavigationState) setNavigationState('saveProfile', this.saveProfile)
  }

  componentDidMount() {
    console.log('Profile componentDidMount')
    const { location } = this.props
    if (location && location.state && location.state.username) this.props.setNavigationState('profileTitle', location.state.username)
  }

  componentWillUnmount() {
    console.log('Profile componentWillUnmount')
  }

  saveProfile = () => {
    const user = {
      name: this.state.name
    }
    console.log('user: ', user, this.state.id, this.props.history)
    this.props.dispatch(UserState.updateUser(this.state.id, user, this.props.history))
    // this.props.history.goBack()
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
  }
})

export default Profile
