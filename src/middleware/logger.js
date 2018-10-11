const logger = store => next => action => {
  let result;
  let production = process.env.NODE_ENV === 'production';
  if (!production) {
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
  }
  result = next(action);
  if (!production) {
    console.log('next state', store.getState());
    console.groupEnd();
  }
  return result;
};

export default logger;
