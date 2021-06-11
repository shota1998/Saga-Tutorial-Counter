import { put, takeEvery, all, call } from 'redux-saga/effects';
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
    const products = yield call(api.getMethod);
    yield put({ type: 'PRODUCTS_RECEIVED', payload: products });
  } catch (error) {
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', payload: error });
  }
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
