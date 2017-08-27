import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { getTokenRequest } from '../../actions/token'
import './styles.css'

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTokenRequestAction: getTokenRequest
  }, dispatch)
)

class Auth extends Component {
  static propTypes = {
    getTokenRequestAction: PropTypes.func.isRequired
  }

  authorize = (e) => {
    e.preventDefault()
    this.props.getTokenRequestAction()
  }

  render() {
    return (
      <div className='App'>
        <section className='Auth-header'>
          <h1 className='Auth-headerTitle'>Linking Park</h1>
        </section>
        <section className='Auth'>
          <h1 className='Auth-title'>Please, sign in with your Github account</h1>
          <p className='Auth-text'>
            You should log in to Linking Park to authorize
            <br />
            Tss-sss-ss... We'll keep all your credentials in a secret
            <br />
            Nobody'll stole them. I promise.
          </p>
          <a href='' className='Auth-button' onClick={this.authorize}>
            Log In with Github
          </a>
        </section>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Auth)

