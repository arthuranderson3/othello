import createActionUndoMove from './createActionUndoMove';
import { UNDO_MOVE } from './othelloActionConstants';

describe('createActionUndoMove test suite', () => {
	let action;
	beforeAll( () => {
		action = createActionUndoMove();
	});
	it( 'action.type', () => {
		expect( action ).toHaveProperty( 'type');
	});
	it( 'action.payload', () => {
		expect( action ).toHaveProperty( 'payload' );
	});
	it( 'action.type=UNDO_MOVE', () => {
		expect( action.type ).toEqual('UNDO_MOVE');
	});
	it('action.payload={}', () => {
		expect( action.payload ).toEqual( {} );
	});

});
