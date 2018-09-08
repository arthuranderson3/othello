import createGame from './createGame';
import constructGame from './constructGame';

describe('createGame suite', () => {
	it('createGame#default', () => {
		const g1 = constructGame('namedGame', 'Yoda', 1 );
		const game = createGame(g1);
		expect(game).toHaveProperty('name');
		expect(game).toHaveProperty('id');
		expect(game).toHaveProperty('startTime');
		expect(game).toHaveProperty('players');
		expect(game).toHaveProperty('history');
		expect(game).toHaveProperty('view');
		expect(game).toEqual(g1);
		expect(game.name).toEqual('namedGame');
		expect(game.players[0].name).toEqual('Yoda');
	})
})
