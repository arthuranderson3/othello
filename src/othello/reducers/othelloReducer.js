import { START_GAME } from '../actions/othelloActionConstants';
import { MAKE_MOVE } from '../actions/othelloActionConstants';
import { UNDO_MOVE } from '../actions/othelloActionConstants';
import { RESET_GAME } from '../actions/othelloActionConstants';
import { DEBUG_STATE } from '../actions/othelloActionConstants';

import { constructGame } from '../model/game/constructGame';
import { makeMove } from '../controller/moveLogic/makeMove';
import { undoMove } from '../state/undoMove';
import { resetBoard } from '../state/resetBoard';


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

export default function othelloReducer( state, action ) {
	switch( action.type ){
		case START_GAME:
		{
			return constructGame( action.payload.gameName, action.payload.playerName );
		}
		case MAKE_MOVE:
		{
			try{
				return makeMove( state, action.payload.idx );
			} catch ( err ) {
				console.error( err );
				return state;
			}
		}
		case UNDO_MOVE:
		{
			try{
				return undoMove( state );
			} catch( err ) {
				console.error( err );
				return state;
			}
		}
		case RESET_GAME:
		{
			return resetBoard();
		}
		case DEBUG_STATE:
		{
			console.info( JSON.stringify( state, null, 2 ) );
			return state;
		}
		default: {
			console.error( { error: "Unhandled action", state, action } );
			return state;
		}
	}
}
