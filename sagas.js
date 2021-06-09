import { put, takeEvery, all, call } from 'redux-saga/effects';
import getMethod from './api/getMethod';
// import  postMethod from "./api/postMethod";

const url = 'http://localhost:8080/group/';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts);
}

export function* fetchProducts() {
  const products = yield getMethod(url + 'list');
  console.log(products);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
