import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { userLogOut } from '../../actions/user'
import AddLink from '../AddLink'
import Links from '../Links'
import './styles.css'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    userLogOutAction: userLogOut
  }, dispatch)
)

class Dashboard extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      photo: PropTypes.string
    }).isRequired,
    userLogOutAction: PropTypes.func.isRequired
  }

  logOut = (e) => {
    e.preventDefault()
    this.props.userLogOutAction()
  }

  render() {
    const { user } = this.props

    return (
      <div className='App'>
        <section className='Header'>
          <h1 className='Header-title'>Linking Park</h1>
          <p className='Header-text'>
            <img src={user.photo} className='Header-photo' alt='Avatar' />
            {user.name}:
            <a href='' onClick={this.logOut} className='Header-link'>log out</a>
          </p>
        </section>
        <AddLink />
        <Links />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

