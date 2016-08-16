import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { App, configureStore } from './Counter'

const rootEl = document.getElementById('root')

const store = configureStore()

ReactDOM.render(
    <App store={store} />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./Counter', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Counter').App
    ReactDOM.render(
      <AppContainer>
         <NextApp store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
