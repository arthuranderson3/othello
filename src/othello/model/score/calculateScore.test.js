import calculateScore from './calculateScore';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('calculateScore test suite', () => {
	it('initial Score', () => {
		const gbp = createGameBoardPieces();
		const whiteScore = calculateScore( gbp, 'W' );
		expect( whiteScore ).toEqual(2);
	});
})
