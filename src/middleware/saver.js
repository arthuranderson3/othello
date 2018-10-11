import storeName from './storeName';

const saver = store => next => action => {
  let result = next(action);
  if (process.env.NODE_ENV === 'test') {
    return result;
  }
  localStorage[storeName] = JSON.stringify(store.getState());
  return result;
};

export default saver;
