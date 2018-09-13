import computeScore from './computeScore';
import constructGameBoard from '../gameBoard/constructGameBoard';

describe('computeCurrentScore test suite', () => {
	it('initial score', () => {
		const { score } = computeScore(
											constructGameBoard() );
		expect( score.white ).toEqual(2);
		expect( score.black ).toEqual(2);
	});
})
