import { UNDO_MOVE } from './othelloActionConstants';
import createAction from './createAction';

export default function createActionUndoMove( ) {
	return createAction( UNDO_MOVE, {} );
}
