import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { upadteLinkField, postLinkRequest, postLinkFailure } from '../../actions/link'
import './styles.css'

const mapStateToProps = state => ({
  user: state.user,
  link: state.link
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    upadteLinkFieldAction: upadteLinkField,
    postLinkRequestAction: postLinkRequest,
    postLinkFailureAction: postLinkFailure
  }, dispatch)
)

class AddLink extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string
    }).isRequired,
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      error: PropTypes.bool
    }),
    upadteLinkFieldAction: PropTypes.func.isRequired,
    postLinkRequestAction: PropTypes.func.isRequired,
    postLinkFailureAction: PropTypes.func.isRequired
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

  render() {
    const { link } = this.props

    return (
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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLink)

