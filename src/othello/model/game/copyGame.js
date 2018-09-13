import createPlayerArray from '../player/createPlayerArray';
import copyGameBoardArray from '../gameBoard/copyGameBoardArray';
import constructGameView from '../gameView/constructGameView';

export default function copyGame( { id, name, startTime, players, snapshots }) {
	return {
		id,
		name,
		startTime,
		players: createPlayerArray( players ),
		snapshots: copyGameBoardArray( snapshots ),
		...constructGameView( snapshots )
	}
}
