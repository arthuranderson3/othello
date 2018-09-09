import { MAKE_MOVE } from './othelloActionConstants';
import createAction from './createAction';

export default function createActionMakeMove( idx ) {
	return createAction( MAKE_MOVE, { idx } ); 
}
