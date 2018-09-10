import createActionMakeMove from './createActionMakeMove';
import { MAKE_MOVE } from './othelloActionConstants';

describe('createActionMakeMove test suite', () => {
	let action;
	beforeAll( () => {
		action = createActionMakeMove( 29 );
	});
	it( 'action.type', () => {
		expect( action ).toHaveProperty('type');
	});
	it( 'action.payload', () => {
		expect( action ).toHaveProperty('payload');
	});
	it( 'action.type=MAKE_MOVE',() => {
		expect( action.type ).toEqual(MAKE_MOVE);
	});
	it( 'action.payload={idx}', () => {
		expect( action.payload ).toHaveProperty('idx');
	});
	it( 'action.payload.idx=29', () => {
		expect( action.payload.idx).toEqual(29);
	});
});
