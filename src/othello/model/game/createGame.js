import createPlayerArray from '../player/createPlayerArray';
import createGameBoardPiecesArray from '../gameBoardPieces/createGameBoardPiecesArray';
import createGameView from '../gameView/createGameView';

export default function createGame( { id, name, startTime, players, history, gameView }) {
	return {
		id,
		name,
		startTime,
		players: createPlayerArray( players ),
		history: createGameBoardPiecesArray( history ),
		gameView: createGameView( gameView )
	}
}
