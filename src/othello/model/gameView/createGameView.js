import createScore from '../score/createScore';

export default function createGameView( { score, currentTurn, currentPlayer, lastTurnTime } ) {
	return {
		score: createScore( score ),
		currentTurn,
		currentPlayer,
		lastTurnTime
	};
}
