import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'js/configureStore'
import App from 'js/containers/AppContainer'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
