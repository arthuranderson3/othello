import calculateScore from './calculateScore';
import createGameBoard from '../gameBoard/createGameBoard';

describe('calculateScore test suite', () => {
	it('initial Score', () => {
		const gbp = createGameBoard();
		const whiteScore = calculateScore( gbp, 'W' );
		expect( whiteScore ).toEqual(2);
	});
})
