import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { getTokenRequest } from '../../actions/token'
import { upadteLinkField, postLinkRequest,
  postLinkFailure, removeLinkRequest } from '../../actions/link'
import './styles.css'

const mapStateToProps = state => ({
  token: state.token.token,
  user: state.user,
  links: state.links.links,
  link: state.link
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTokenRequestAction: getTokenRequest,
    upadteLinkFieldAction: upadteLinkField,
    postLinkRequestAction: postLinkRequest,
    postLinkFailureAction: postLinkFailure,
    removeLinkRequestAction: removeLinkRequest
  }, dispatch)
)

class App extends Component {
  static propTypes = {
    token: PropTypes.string,
    user: PropTypes.shape({
      uid: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string
    }).isRequired,
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      error: PropTypes.bool
    }),
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })),
    getTokenRequestAction: PropTypes.func.isRequired,
    upadteLinkFieldAction: PropTypes.func.isRequired,
    postLinkRequestAction: PropTypes.func.isRequired,
    postLinkFailureAction: PropTypes.func.isRequired,
    removeLinkRequestAction: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTokenRequestAction()
  }

  handleChange = (e) => {
    this.props.upadteLinkFieldAction(e.target.name, e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { link, postLinkRequestAction, postLinkFailureAction } = this.props
    const userUid = this.props.user.uid

    if (link.title === '' || link.link === '') {
      postLinkFailureAction()
    } else {
      postLinkRequestAction(userUid, link)
    }
  }

  removeItem = (itemId) => {
    const userUid = this.props.user.uid
    this.props.removeLinkRequestAction(userUid, itemId)
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
    const { link, links, user } = this.props

    return (
      <div className='App'>
        <section className='Header'>
          <h1 className='Header-title'>Linking Park</h1>
          { user && user.uid ? this.displayUserName(user) : this.displayEmptyUser() }
        </section>
        { user && user.uid &&
          <section className='AddForm'>
            <form onSubmit={this.handleSubmit}>
              <input
                className='AddForm-input1'
                type='text'
                name='title'
                placeholder='Link name'
                onChange={this.handleChange}
                value={link.title}
              />
              <input
                className='AddForm-input2'
                type='text'
                name='link'
                placeholder='Enter your link here...'
                onChange={this.handleChange}
                value={link.link}
              />
              <button className='AddForm-submit'>
                Add Link
              </button>
              { link.error &&
                <p className='AddForm-error'>All fields are required and can't be blank</p>
              }
            </form>
          </section>
        }
        { user && user.uid &&
          <section className='Items'>
            <ol>
            {links.map((item) => {
              return (
                <li key={item.id} className='Item'>
                  <h3 className='Item-title'>{item.title}</h3>
                  <p className='Item-link'>{item.link}</p>
                  <button
                    className='Item-remove'
                    onClick={this.removeItem.bind(this, item.id)}
                  >remove</button>
                </li>
              )
            })}
            </ol>
          </section>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

