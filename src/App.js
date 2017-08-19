import React, { Component } from 'react'
import firebase from './firebase'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      link: '',
      title: '',
      items: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items')

    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val()
      let newState = []

      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          link: items[item].link
        })
      }

      this.setState({
        items: newState
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const itemsRef = firebase.database().ref('items')
    const item = {
      title: this.state.title,
      link: this.state.link
    }
    itemsRef.push(item)

    this.setState({
      title: '',
      link: ''
    })
  }

  removeItem = (itemId) => {
    const itemRef = firebase.database().ref(`/items/${itemId}`)
    itemRef.remove()
  }

  render() {
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
              value={this.state.title}
            />
            <input
              className='AddForm-input2'
              type='text'
              name='link'
              placeholder='Enter your link here...'
              onChange={this.handleChange}
              value={this.state.link}
            />
            <button className='AddForm-submit'>
              Add Link
            </button>
          </form>
        </section>
        <section className='Items'>
          <ol>
          {this.state.items.map((item) => {
            return (
              <li key={item.id} className='Item'>
                <h3 className='Item-title'>{item.title}</h3>
                <p className='Item-link'>{item.link}</p>
                <button className='Item-remove' onClick={() => this.removeItem(item.id)}>remove</button>
              </li>
            )
          })}
          </ol>
        </section>
      </div>
    )
  }
}

export default App
