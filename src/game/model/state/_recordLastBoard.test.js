import { recordLastBoard } from './_recordLastBoard';
import { GameBoardPieces } from '../GameBoardPieces';

describe('recordLastBoard test suite', () => {
	it( 'recordLastBoard#success', () => {
		const gbp = new GameBoardPieces();
		const history = [ gbp ];
		const newGbp = gbp.clone();
		newGbp.idx = 20;
		const newGameRecords = history.concat( newGbp );
		const record = recordLastBoard( { history }, newGbp );
		expect( record.history ).toEqual(newGameRecords);
		expect( record.history.length ).toEqual(2);
	});
});
