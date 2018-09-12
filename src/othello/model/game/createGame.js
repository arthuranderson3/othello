import createPlayerArray from '../player/createPlayerArray';
import createGameBoardArray from '../gameBoard/createGameBoardArray';
import createGameView from '../gameView/createGameView';

export default function createGame( { id, name, startTime, players, history }) {
	return {
		id,
		name,
		startTime,
		players: createPlayerArray( players ),
		history: createGameBoardArray( history ),
		...createGameView( history )
	}
}
