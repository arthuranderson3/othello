import createActionMakeMove from './createActionMakeMove';
import { MAKE_MOVE } from './othelloActionConstants';

describe('createActionMakeMove test suite', () => {
	it( 'default', () => {
		const { type, payload } = createActionMakeMove( 29 );
		expect( type ).toEqual( MAKE_MOVE );
		expect( payload ).toHaveProperty('idx');
	})
});
