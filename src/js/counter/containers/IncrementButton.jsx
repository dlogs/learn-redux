import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../actions'

const IncrementButton = ({onClick}) => (
    <button type='button' onClick={onClick}>+</button>
)

export default connect(
    null,
    {onClick: incrementCounter}
)(IncrementButton)