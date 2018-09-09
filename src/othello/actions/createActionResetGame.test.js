import createActionResetGame from './createActionResetGame';
import { RESET_GAME } from './othelloActionConstants';

describe('createActionResetGame test suite', () => {
	it('default', () => {
		const { type, payload } = createActionResetGame();
		expect( type ).toEqual( RESET_GAME );
		expect( payload ).toEqual( {} );
	})
})
