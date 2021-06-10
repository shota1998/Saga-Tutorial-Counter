import test from 'tape';
import { put, call } from 'redux-saga/effects';

<<<<<<< HEAD
import getMethod from './api/getMethod';
=======
>>>>>>> ce741b336ae9761c262bdceacbb288bbac6d16d8
import { incrementAsync, delay, fetchProducts } from './sagas';

test('incrementAsync Saga test', (assert) => {
  const gen = fetchProducts();
<<<<<<< HEAD
  assert.deepEqual(
    gen.next().value,
    call(getMethod),
    'fetchProducts should yield an Effect call(getMethod)'
  );

  gen.next();

=======
>>>>>>> ce741b336ae9761c262bdceacbb288bbac6d16d8
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

<<<<<<< HEAD
  // assert.deepEqual(
  //   gen.next(),
  //   { done: 'true', value: undefined },
  //   'incrementAsync Saga must be done'
  // );
=======
  assert.deepEqual(
    gen.next(),
    { done: 'true', value: undefined },
    'incrementAsync Saga must be done'
  );
>>>>>>> ce741b336ae9761c262bdceacbb288bbac6d16d8

  assert.end();
});
