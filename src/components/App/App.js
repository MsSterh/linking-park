import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { getLinksRequest } from '../../actions/links'
import { upadteLinkField, postLinkRequest, removeLinkRequest } from '../../actions/link'
import './styles.css'

const mapStateToProps = state => ({
  links: state.links.links,
  link: state.link
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getLinksRequestAction: getLinksRequest,
    upadteLinkFieldAction: upadteLinkField,
    postLinkRequestAction: postLinkRequest,
    removeLinkRequestAction: removeLinkRequest
  }, dispatch)
)

class App extends Component {
  static propTypes = {
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }),
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })),
    getLinksRequestAction: PropTypes.func.isRequired,
    upadteLinkFieldAction: PropTypes.func.isRequired,
    postLinkRequestAction: PropTypes.func.isRequired,
    removeLinkRequestAction: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getLinksRequestAction(() => {
      console.log('success callback')
    })
  }

  handleChange = (e) => {
    this.props.upadteLinkFieldAction(e.target.name, e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { link, postLinkRequestAction } = this.props
    postLinkRequestAction(link)
  }

  removeItem = (itemId) => {
    this.props.removeLinkRequestAction(itemId)
  }

  render() {
    const { link, links } = this.props

    return (
      <div className='App'>
        <div className='App-header'>
          <h2 className='App-headerTitle'>Linking Park</h2>
        </div>
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
          </form>
        </section>
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
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

