import { GameBoardPieces } from '../GameBoardPieces';
import { getTurn } from './_getTurn';

describe('_getTurn test suite', () => {
	it('getTurn# success', () => {
		const initGameBoard = new GameBoardPieces();
		const initGameState = { history: [initGameBoard] };
		expect( getTurn( initGameState ) ).toBe( 1 );
	});

	it('getTurn# undefined', () => {
		expect( getTurn() ).toBeUndefined();
	})
});