import { DEBUG_STATE } from './othelloActionConstants';
import createAction from './createAction';

export default function createActionDebugState() {
	return createAction( DEBUG_STATE, {} );
}
