import createPlayerArray from '../player/createPlayerArray';
import copyGameBoardArray from '../gameBoard/copyGameBoardArray';
import constructGameView from '../gameView/constructGameView';

export default function copyGame( { id, name, startTime, players, history }) {
	return {
		id,
		name,
		startTime,
		players: createPlayerArray( players ),
		history: copyGameBoardArray( history ),
		...constructGameView( history )
	}
}
