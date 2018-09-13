import computeScore from '../score/computeScore';
import currentSnapshot from '../game/currentSnapshot';
import moment from 'moment';

export default function constructGameView( snapshots ) {
	const currentBoard = currentSnapshot( {snapshots} );
	return { view: {
			...computeScore( currentBoard ),
			currentTurn: snapshots.length,
			currentPlayer: currentBoard.player,
			lastTurnTime: moment.utc().format()
		}
	};
}
