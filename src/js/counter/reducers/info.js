import { incrementCounter, incrementCounterAsync } from '../actions'
import { handleActions } from 'redux-actions'

export default handleActions({
    [incrementCounter]: state => '',
    [incrementCounterAsync]: state => 'About to increment'
}, '')