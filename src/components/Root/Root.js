/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import firebase from '../../database/firebase'
import reducers from '../../reducers'
import sagas from '../../sagas'
import App from '../App'
import './styles.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

const db = firebase.database()
const context = {
  db: db
}

sagaMiddleware.run(sagas, context)

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
