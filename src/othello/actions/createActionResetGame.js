import { RESET_GAME } from './othelloActionConstants';
import createAction from './createAction';

export default function createActionResetGame( ) {
	return createAction( RESET_GAME, {} );
}
