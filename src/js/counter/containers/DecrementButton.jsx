import React from 'react'
import { connect } from 'react-redux'
import { decrementCounter } from '../actions'

const DecrementButton = ({onClick}) => (
    <button type='button' onClick={onClick}>-</button>
)

export default connect(
    null,
    {onClick: decrementCounter}
)(DecrementButton)