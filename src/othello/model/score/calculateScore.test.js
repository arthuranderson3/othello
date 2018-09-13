import calculateScore from './calculateScore';
import constructGameBoard from '../gameBoard/constructGameBoard';

describe('calculateScore test suite', () => {
	it('initial Score', () => {
		const gbp = constructGameBoard();
		const whiteScore = calculateScore( gbp, 'W' );
		expect( whiteScore ).toEqual(2);
	});
})
