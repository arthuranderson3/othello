import { createStore } from 'redux';
import { createGame } from './model/game/createGame';
import { constructGame } from './model/game/constructGame';
import { checkMove } from './controller/moveLogic/checkMove';

function gameMoves( state, action ) {
	switch( action.type ){
		case "START_GAME":
		{
			return createGame(
				constructGame( state.gameName,
											state.playerName,
											state.numPlayers ) );
		}
		case "MAKE_MOVE":
		{
			return checkMove( state )
		}

	}
}
