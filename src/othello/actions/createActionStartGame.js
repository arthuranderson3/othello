import { START_GAME } from './othelloActionConstants';
import createAction from './createAction';

export default function createActionStartGame( gameName = 'anonymous', playerName = 'white' ) {
	return createAction( START_GAME, { gameName, playerName } );
}
