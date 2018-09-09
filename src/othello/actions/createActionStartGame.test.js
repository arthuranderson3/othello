import createActionStartGame from './createActionStartGame';
import { START_GAME } from './othelloActionConstants';

describe('createActionStartGame', () => {
	it('default', () => {
		const { type, payload } = createActionStartGame();
		expect( type ).toEqual( START_GAME );
		expect( payload ).toHaveProperty( 'gameName' );
		expect( payload ).toHaveProperty( 'playerName');
		expect( payload.gameName ).toEqual('anonymous');
		expect( payload.playerName ).toEqual('white');
	});
	it('w/params', () => {
		const { type, payload } = createActionStartGame( 'test_game_name', 'player_one');
		expect( type ).toEqual( START_GAME );
		expect( payload.gameName ).toEqual( 'test_game_name' );
		expect( payload.playerName ).toEqual('player_one');
	});
});
