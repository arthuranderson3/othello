import computeScore from '../score/computeScore';
import moment from 'moment';

export default function createGameView( history ) {
	const lastGameBoard = history[ history.length - 1 ];
	return { view: {
			...computeScore( lastGameBoard ),
			currentTurn: history.length,
			currentPlayer: lastGameBoard.player,
			lastTurnTime: moment.utc().format()
		}
	};
}
