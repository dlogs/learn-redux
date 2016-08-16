import { takeEvery, takeLatest, delay } from 'redux-saga'
import { put, call, fork } from 'redux-saga/effects'
import { INCREMENT_COUNTER_ASYNC } from '../actionTypes'
import { incrementCounter } from '../actions'

function* incrementAsync() {
    yield call(delay, 1000)
    yield put(incrementCounter())
}

export default function* () {
    yield fork(takeEvery, INCREMENT_COUNTER_ASYNC, incrementAsync)
}