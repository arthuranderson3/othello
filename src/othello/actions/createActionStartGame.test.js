import createActionStartGame from './createActionStartGame';
import { START_GAME } from './othelloActionConstants';

describe('createActionStartGame', () => {
	let startGame;
	let payload;
	beforeAll( () => {
		startGame = createActionStartGame();
		payload = startGame.payload;
	});
	it('startGame.type', () => {
		expect(startGame).toHaveProperty('type');
	});
	it('startGame.type=START_GAME', () => {
		expect(startGame.type).toEqual(START_GAME);
	});
	it('startGame.payload', () => {
		expect( startGame ).toHaveProperty('payload');
	});
	it('startGame.payload.gameName', () => {
		expect( payload ).toHaveProperty('gameName')
	});
	it('startGame.payload.gameName=anonymous', () => {
		expect(payload.gameName).toEqual('anonymous');
	});
	it('startGame.payload.playerName', () => {
		expect( payload ).toHaveProperty('playerName');
	});
	it('startGame.payload.playerName', () => {
		expect( payload.playerName ).toEqual('white');
	});
	it('w/params payload.gameName=test_game_name', () => {
		const { type, payload } = createActionStartGame( 'test_game_name', 'player_one');
		expect( payload.gameName ).toEqual( 'test_game_name' );
	});
	it('w/params payload.playerName=player_one', () => {
		const { type, payload } = createActionStartGame( 'test_game_name', 'player_one');
		expect( payload.playerName ).toEqual('player_one');
	})
});
