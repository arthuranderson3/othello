import GameBoardPieces from './GameBoardPieces';
import _ from 'lodash';

describe('GameBoardPieces test suite', () => {
	
	test('#player ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.player ).toBe('W');
	});
	
	test('#idx ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.idx ).toBeUndefined();
	});
	
	test('#squares ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.squares.length ).toBe(64);
	});

	test('#toOppositePlayer ', () => {
		const pieces = new GameBoardPieces();
		expect( pieces.toOppositePlayer() ).toBe('B');
	});

	test('#clone ', () => {
		const pieces = new GameBoardPieces();
		const cloned = pieces.clone();
		expect( cloned.player ).toBe('W');
		expect( cloned.idx ).toBeUndefined();
		expect( cloned.squares.length ).toBe(64); 

	});

	test('#ctor props', () => {
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

	test( '#makeAMove', () => {
		const pieces = new GameBoardPieces();
		const move = pieces.makeAMove(27);
		expect( move.player ).toBe(pieces.toOppositePlayer() );
		expect( move.idx ).toBe( 27 );
		expect( move.squares.length ).toBe( 64 );
		expect( _.isEqual( move.squares, pieces.squares ) ).toBe( true );
	})
});