import storeName from './storeName';

const saver = store => next => action => {
  let result = next(action);
  localStorage[storeName] = JSON.stringify(store.getState());
  return result;
};

export default saver;
