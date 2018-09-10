import { createStore } from 'redux';
import othelloReducer from './reducers/othelloReducer';


let store = createStore( othelloReducer );

store.subscribe( () =>
	console.log( store.getState() ) );

store.dispatch( createActionStartGame( 'createGameName', 'guru', 'yoda', 1 ) );
