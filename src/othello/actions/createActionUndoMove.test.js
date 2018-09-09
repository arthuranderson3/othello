import createActionUndoMove from './createActionUndoMove';
import { UNDO_MOVE } from './othelloActionConstants';

describe('createActionUndoMove test suite', () => {
	it('default', () => {
		const { type, payload } = createActionUndoMove();
		expect( type ).toEqual(UNDO_MOVE);
		expect( payload ).toEqual( {} );
	});
});
