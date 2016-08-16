import { combineReducers } from 'redux'
import counterValue from './counterValue'
import info from './info'

export default combineReducers({
    counterValue,
    info
})