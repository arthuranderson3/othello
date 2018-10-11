import { createStore, applyMiddleware } from 'redux';
import othelloReducer from './reducers/othelloReducer';
import logger from '../middleware/logger';
import saver from '../middleware/saver';
import loader from '../middleware/loader';

const storeFactory = initialState =>
  applyMiddleware(logger, saver)(createStore)(othelloReducer, loader(initialState));

export default storeFactory;
