import { createStore, applyMiddleware } from 'redux';
import othelloReducer from './reducers/othelloReducer';

const logger = store => next => action => {
  let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
const storage = 'othello-react-redux';

const saver = store => next => action => {
  let result = next(action);
  localStorage[storage] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = initialState =>
  applyMiddleware(logger, saver)(createStore)(
    othelloReducer,
    localStorage[storage] ? JSON.parse(localStorage[storage]) : initialState
  );

export default storeFactory;
// const store = createStore( othelloReducer, constructGame() );
// export default store;
