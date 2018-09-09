import createActionDebugState from './createActionDebugState';
import { DEBUG_STATE } from './othelloActionConstants';

describe('createActionDebugState test suite', () => {
	it('default', () => {
		const { type, payload } = createActionDebugState();
		expect( type ).toEqual( DEBUG_STATE );
		expect( payload ).toEqual( {} );
	})
})
