import map from 'lodash/map';
import createGameBoard from './createGameBoard';

export default function createGameBoardArray( gbps ) {
	return map( gbps, createGameBoard );
}
