import storeName from './storeName';

const loader = initialState => {
  if (process.env.NODE_ENV === 'test') {
    return initialState;
  }
  return localStorage[storeName] ? JSON.parse(localStorage[storeName]) : initialState;
};
export default loader;
