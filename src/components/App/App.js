import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Dashboard from '../Dashboard'
import Auth from '../Auth'

const mapStateToProps = state => ({
  user: state.user
})

class App extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string
    }).isRequired
  }

  render() {
    const { user } = this.props
    const isUser = user && user.uid

    return (
      isUser ? <Dashboard /> : <Auth />
    )
  }
}

export default connect(mapStateToProps)(App)

