import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { removeLinkRequest } from '../../actions/link'
import './styles.css'

const mapStateToProps = state => ({
  user: state.user,
  links: state.links.links
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeLinkRequestAction: removeLinkRequest
  }, dispatch)
)

class Links extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string.isRequired
    }).isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })),
    removeLinkRequestAction: PropTypes.func.isRequired
  }

  removeItem = (itemId) => {
    const userUid = this.props.user.uid
    this.props.removeLinkRequestAction(userUid, itemId)
  }

  render() {
    const { links } = this.props

    return (
      <section className='Items'>
        <ol>
        {links.map((item) => {
          return (
            <li key={item.id} className='Item'>
              <h3 className='Item-title'>{item.title}</h3>
              <a className='Item-link' href={item.link} target='_blank'>
                {item.link}
              </a>
              <button
                className='Item-remove'
                onClick={this.removeItem.bind(this, item.id)}
              >remove</button>
            </li>
          )
        })}
        </ol>
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links)

