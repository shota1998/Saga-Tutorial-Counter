import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as api from './api/getMethod';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* fetchProducts() {
  try {
    const { data, error } = yield call(api.getMethod);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
