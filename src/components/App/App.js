import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { getTokenRequest } from '../../actions/token'
import AddLink from '../AddLink'
import Links from '../Links'
import './styles.css'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTokenRequestAction: getTokenRequest
  }, dispatch)
)

class App extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string
    }).isRequired,
    getTokenRequestAction: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTokenRequestAction()
  }

  displayUserName = (user) => {
    return (
      <p className='Header-text'>
        <img src={user.photo} className='Header-photo' alt='Avatar' />
        {user.name}
      </p>
    )
  }

  displayEmptyUser = () => {
    return (
      <p className='Header-text'>
        Log In with Github
      </p>
    )
  }

  render() {
    const { user } = this.props
    const isUser = user && user.uid

    return (
      <div className='App'>
        <section className='Header'>
          <h1 className='Header-title'>Linking Park</h1>
          { isUser ? this.displayUserName(user) : this.displayEmptyUser() }
        </section>
        { isUser && <AddLink /> }
        { isUser && <Links /> }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

