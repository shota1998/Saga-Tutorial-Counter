import { put, takeEvery, all, call } from 'redux-saga/effects';
import getMethod from './api/getMethod';

const url = 'http://localhost:8080/group/list';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* fetchProducts() {
  const products = yield call(getMethod);
  if (products) {
    console.log(products);
    console.log('-----fetch succeed');
  } else {
    console.log(products);
    console.log('-----fetch failed');
  }
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
