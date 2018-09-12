import computeScore from './computeScore';
import createGameBoard from '../gameBoard/createGameBoard';

describe('computeCurrentScore test suite', () => {
	it('initial score', () => {
		const { score } = computeScore(
											createGameBoard() );
		expect( score.white ).toEqual(2);
		expect( score.black ).toEqual(2);
	});
})
