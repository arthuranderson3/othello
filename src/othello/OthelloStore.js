import { createStore } from 'redux';
import { createGame } from './model/game/createGame';
import { constructGame } from './model/game/constructGame';
import { makeMove } from './controller/moveLogic/makeMove';
import { undoMove } from './state/undoMove';
import { resetBoard } from './state/resetBoard';


function createActionStartGame( gameName, playerOneName, numPlayers = 1  ) {
	return {
		type: START_GAME,
		payload: constructGame( gameName, playerOneName, numPlayers )
	};
}

function createActionMakeMove( idx ) {
	return {
		type: MAKE_MOVE,
		payload: { idx }
	};
}

function createActionUndoMove( ){
	return {
		type: UNDO_MOVE,
		payload: {}
	};
}

function createActionResetGame() {
	return {
		type: RESET_GAME,
		payload: {}
	}
}

function createActionDebugState( logLevel ) {
	return {
		type: DEBUG_STATE,
		payload: { logLevel }
	}
}

/**

 Uniform reducers signatures enable this.
 Then we can ask each set of actions to register

	createAction( ) { return { type:ACTION_NAME, payload }; }

 	register: { [ACTION_NAME]: reducer( state, action ) => state }

 	registerAction(register, ACTION_NAME, reducer ) {
    register[ ACTION_NAME ]: reducer;
	}

	callToAction(register, action, state ) {
		if( register[action.type] === undefined ){
			LOG( "ERROR UNDEFINED ACTION TYPE" );
			return state;
		}
		try{
			return register[action.type]( state, action.payload );
		} catch( err ) {
			LOG( "ERROR with `action.type`, {`action.payload`}, {`state`} ")
		}
	}

**/
function gameReducer( state, action ) {
	switch( action.type ){
		case START_GAME:
		{
			return startGame( state, action.payload );
		}
		case MAKE_MOVE:
		{
			return makeMove( state, action.payload )
		}
		case UNDO_MOVE:
		{
			return undoMove( state, action.payload );
		}
		case RESET_GAME:
		{
			return resetBoard( state, action.payload );
		}
		case DEBUG_LOG:
		{
			console.info( JSON.stringify( state, null, 2 ) );
			return state;
		}
	}
}

let store = createStore( gameReducer );

store.subscribe( () =>
	console.log( store.getState() ) );

store.dispatch( actionStartGame( 'createGameName', 'guru', 'yoda', 1 ) );
