import GameState from './GameState';

describe('GameState test suite', () => {
	it('#history ', () => {
		const state = new GameState();
		expect( state.history.length ).toBe(1);
	});

	it('#getLastBoard', () => {
		const state = new GameState();
		const gb = state.getLastBoard();
		expect( gb.idx ).toBeUndefined();
		expect( gb.player ).toBe( 'W' );
		expect( gb.squares[27] ).toBe( 'W' );
		expect( gb.squares[28] ).toBe( 'B' );
		expect( gb.squares[35] ).toBe( 'B' );
		expect( gb.squares[36] ).toBe( 'W' );

	});

	
})