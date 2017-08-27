import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AddLink from '../AddLink'
import Links from '../Links'
import './styles.css'

const mapStateToProps = state => ({
  user: state.user
})

class Dashboard extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      photo: PropTypes.string
    }).isRequired
  }

  render() {
    const { user } = this.props

    return (
      <div className='App'>
        <section className='Header'>
          <h1 className='Header-title'>Linking Park</h1>
          <p className='Header-text'>
            <img src={user.photo} className='Header-photo' alt='Avatar' />
            {user.name}
          </p>
        </section>
        <AddLink />
        <Links />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dashboard)

