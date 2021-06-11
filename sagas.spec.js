import test from 'tape';
import { put, call } from 'redux-saga/effects';

import * as api from './api/getMethod';
import * as sagas from './sagas';

test('incrementAsync Saga test', (assert) => {
  var gen = sagas.incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(sagas.delay, 1000),
    'incrementAsync should return a Promise that will resolve after 1 second'
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync Saga must dispatch an INCREMENT action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  );

  gen = sagas.fetchProducts();

  assert.deepEqual(
    gen.next().value,
    call(api.getMethod),
    'fetchProducts should yield an Effect call(getMethod)'
  );

  const products = {};

  assert.deepEqual(
    gen.next(products).value,
    put({ type: 'PRODUCTS_RECEIVED', payload: products }),
    "fetchProducts should yield an Effect put({ type: 'PRODUCTS_RECEIVED', products })"
  );

  const error = {};

  assert.deepEqual(
    gen.throw(error).value,
    put({ type: 'PRODUCTS_REQUEST_FAILED', payload: error }),
    "fetchProducts should yield an Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
  );

  assert.end();
});
