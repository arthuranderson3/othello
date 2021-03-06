import {
  START_GAME,
  MAKE_MOVE,
  UNDO_MOVE,
  RESET_GAME,
  DEBUG_STATE,
  OPTIONS,
} from '../actions/othelloActionConstants';
import gameStati from '../model/gameBoard/gameStati';
import constructGame from '../model/game/constructGame';
import makeMove from '../controller/moveLogic/makeMove';
import undoMove from '../model/game/undoMove';
import reset from '../model/game/reset';

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

function debugJSON(obj) {
  return JSON.stringify(obj, null, 2);
}
export default function othelloReducer(state, action) {
  switch (action.type) {
    case START_GAME: {
      try {
        //console.info( action.payload );
        const { gameName, playerOne, playerTwo } = action.payload;
        return constructGame(gameName, playerOne, playerTwo, gameStati.WHITE_TURN);
      } catch (err) {
        console.error(err);
        return state;
      }
    }
    case MAKE_MOVE: {
      try {
        return makeMove(state, action.payload.idx);
      } catch (err) {
        console.error(err);
        return state;
      }
    }
    case UNDO_MOVE: {
      try {
        return undoMove(state);
      } catch (err) {
        console.error(err);
        return state;
      }
    }
    case RESET_GAME: {
      return reset(state);
    }
    case DEBUG_STATE: {
      if (process.env.NODE_ENV !== 'test') {
        console.info(JSON.stringify(state, null, 2));
      }
      return state;
    }
    case OPTIONS: {
      return reset(state);
    }
    default: {
      if (process.env.NODE_ENV === 'development') {
        console.error(debugJSON({ error: 'Unhandled action', state, action }));
      }
      if (state === undefined) {
        return null;
      }
      return state;
    }
  }
}
