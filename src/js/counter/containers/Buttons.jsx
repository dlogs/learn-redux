import React from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter, incrementCounterAsync } from '../actions'

const Buttons = ({decrementCounter, incrementCounter, incrementCounterAsync}) => 
    <div>
        <button type='button' onClick={decrementCounter}>Decrement</button>
        <button type='button' onClick={incrementCounter}>Increment</button>
        <button type='button' onClick={incrementCounterAsync}>Increment Async</button>
    </div>

export default connect(
    null, {
        decrementCounter,
        incrementCounter,
        incrementCounterAsync}
)(Buttons)