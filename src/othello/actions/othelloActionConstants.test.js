import { START_GAME } from './othelloActionConstants';
import { MAKE_MOVE } from './othelloActionConstants';
import { UNDO_MOVE } from './othelloActionConstants';
import { RESET_GAME } from './othelloActionConstants';
import { DEBUG_STATE } from './othelloActionConstants';

describe('actionConstants test suite', () => {
	it('START_GAME', () => {
		expect(START_GAME).toEqual('START_GAME');
	});
	it('MAKE_MOVE', () => {
		expect(MAKE_MOVE).toEqual('MAKE_MOVE');
	});
	it('UNDO_MOVE', () => {
		expect(UNDO_MOVE).toEqual('UNDO_MOVE');
	});
	it('RESET_GAME', () => {
		expect(RESET_GAME).toEqual('RESET_GAME');
	});
	it('DEBUG_STATE', () => {
		expect(DEBUG_STATE).toEqual('DEBUG_STATE');
	})
})
