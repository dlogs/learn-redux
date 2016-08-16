import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

export default function() {
    let sagaMiddleware = createSagaMiddleware()
    
    let store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store
}
