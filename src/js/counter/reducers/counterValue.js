import { incrementCounter, decrementCounter } from '../actions'
import { handleActions } from 'redux-actions'

export default handleActions({
    [incrementCounter]: state => state + 1,
    [decrementCounter]: state => state - 1
}, 0)