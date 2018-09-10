import createActionDebugState from './createActionDebugState';
import { DEBUG_STATE } from './othelloActionConstants';

describe('createActionDebugState test suite', () => {
	let action;
	beforeAll( () => {
		action = createActionDebugState();
	});
	it( 'action.type', () => {
		expect( action ).toHaveProperty('type');
	});
	it( 'action.payload', () => {
		expect( action ).toHaveProperty('payload');
	});
	it( 'action.type=DEBUG_STATE', () => {
		expect( action.type ).toEqual( DEBUG_STATE );
	});
	it( 'action.payload={}', () => {
		expect( action.payload ).toEqual({});
	});
})
