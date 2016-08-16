import { createAction } from 'redux-actions'
import * as actionTypes from '../actionTypes'

export const
    incrementCounter = createAction(actionTypes.INCREMENT_COUNTER),
    decrementCounter = createAction(actionTypes.DECREMENT_COUNTER),
    incrementCounterAsync = createAction(actionTypes.INCREMENT_COUNTER_ASYNC)