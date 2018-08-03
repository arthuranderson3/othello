import GameBoardPieces from './GameBoardPieces';
import _ from 'lodash';

describe('GameBoardPieces fs.WriteStream(path, options); suite', () => {
	
	it('#player ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.player ).toBe('W');
	});
	
	it('#idx ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.idx ).toBeUndefined();
	});
	
	it('#squares ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.squares.length ).toBe(64);
	});


	it('#clone ', () => {
		const pieces = new GameBoardPieces();
		const cloned = pieces.clone();
		expect( cloned.player ).toBe('W');
		expect( cloned.idx ).toBeUndefined();
		expect( cloned.squares.length ).toBe(64); 

	});

	it('#ctor props', () => {
		const props = {
			player: 'B',
			idx: 27,
			squares: [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
				, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
				, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
				, undefined, undefined, undefined,       'W',       'B', undefined, undefined, undefined 
				, undefined, undefined, undefined,       'B',       'W', undefined, undefined, undefined 
				, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
				, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
				, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
		};
		const pieces = new GameBoardPieces( props );
		expect( pieces.player ).toBe( 'B' );
		expect( pieces.squares.length ).toBe( 64 );
		expect( pieces.idx ).toBe( 27 );
	});

});