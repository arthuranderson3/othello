import createGame from './createGame';
import constructGame from './constructGame';
import DEFAULT_SQUARES from '../gameBoard/DEFAULT_SQUARES';

describe('createGame suite', () => {
	describe('properties', () => {
		let game;
		beforeAll( () => {
			game = createGame( constructGame() );
		});
		it( 'game.name', () => {
			expect(game).toHaveProperty('name');
		});
		it( 'game.id', () => {
			expect(game).toHaveProperty('id');
		});
		it( 'game.startTime', () => {
			expect(game).toHaveProperty('startTime');
		});
		it( 'game.players', () => {
			expect(game).toHaveProperty('players');
		});
		it( 'game.history', () => {
			expect(game).toHaveProperty('history');
		});
		it( 'game.view', () => {
			expect(game).toHaveProperty('view');
		});

	})
	describe('default values', () => {
		let game;
		beforeAll( () => {
			game = createGame(constructGame());
		});
		it('game.name=anonymous', () => {
			expect(game.name).toEqual('anonymous');
		});
		it('game.players[0].name=white', () => {
			expect(game.players[0].name).toEqual('white');
		});
		it('game.players[0].color=W', () => {
			expect(game.players[0].color).toEqual('W');
		});
		it('game.players[1].name=black', () => {
			expect(game.players[1].name).toEqual('black');
		});
		it('game.players[1].color=B', () => {
			expect(game.players[1].color).toEqual('B');
		});
		it('game.history.length=1', () => {
			expect(game.history.length).toEqual(1);
		});
		it('game.history[0].squaresObj=DEFAULT_SQUARES', () => {
			expect(game.history[0].squaresObj).toEqual( DEFAULT_SQUARES );
		});
	});
});
