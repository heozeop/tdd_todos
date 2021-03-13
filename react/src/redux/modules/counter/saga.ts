import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {increase, decrease, INCREASE_ASYNC, DECREASE_ASYNC} from './actions';

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}