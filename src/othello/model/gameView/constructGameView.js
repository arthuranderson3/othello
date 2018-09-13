import computeScore from '../score/computeScore';
import moment from 'moment';

export default function constructGameView( snapshots ) {
	const currentBoard = snapshots[ snapshots.length - 1 ];
	return { view: {
			...computeScore( currentBoard ),
			currentTurn: snapshots.length,
			currentPlayer: currentBoard.player,
			lastTurnTime: moment.utc().format()
		}
	};
}
