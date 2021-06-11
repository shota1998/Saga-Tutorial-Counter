export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    case 'PRODUCTS_RECEIVED':
      console.log('---PRODUCTS_RECEIVED---');
      console.log(action.payload);
      return state;
    case 'PRODUCTS_REQUEST_FAILED':
      console.log('---PRODUCTS_REQUEST_FAILED---');
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
