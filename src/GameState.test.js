import GameState from './GameState';

describe('GameState test suite', () => {
	test('#history ', () => {
		const state = new GameState();
		expect( state.history.length ).toBe(1);
	});
})