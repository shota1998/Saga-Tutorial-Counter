import test from 'tape';
import { put, call } from 'redux-saga/effects';

import getMethod from './api/getMethod';
import { incrementAsync, delay, fetchProducts } from './sagas';

test('incrementAsync Saga test', (assert) => {
  const gen = fetchProducts();
  assert.deepEqual(
    gen.next().value,
    call(getMethod),
    'fetchProducts should yield an Effect call(getMethod)'
  );

  gen.next();

  // const gen = incrementAsync();

  // assert.deepEqual(
  //   gen.next().value,
  //   call(delay, 1000),
  //   'incrementAsync should return a Promise that will resolve after 1 second'
  // );

  // assert.deepEqual(
  //   gen.next().value,
  //   put({ type: 'INCREMENT' }),
  //   'incrementAsync Saga must dispatch an INCREMENT action'
  // );

  // assert.deepEqual(
  //   gen.next(),
  //   { done: 'true', value: undefined },
  //   'incrementAsync Saga must be done'
  // );

  // assert.deepEqual(
  //   gen.next(),
  //   { done: 'true', value: undefined },
  //   'incrementAsync Saga must be done'
  // );

  assert.end();
});
