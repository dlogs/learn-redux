import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import configureStore from './configureStore'

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Counter />
            </Provider>
        )
    }
}

export { App, configureStore }