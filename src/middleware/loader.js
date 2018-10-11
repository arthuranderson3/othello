import storeName from './storeName';

const loader = initialState =>
  localStorage[storeName] ? JSON.parse(localStorage[storeName]) : initialState;

export default loader;
