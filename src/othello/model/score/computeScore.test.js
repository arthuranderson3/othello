import computeScore from './computeScore';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('computeCurrentScore test suite', () => {
	it('initial score', () => {
		const { score } = computeScore(
											createGameBoardPieces() );
		expect( score.white ).toEqual(2);
		expect( score.black ).toEqual(2);
	});
})
