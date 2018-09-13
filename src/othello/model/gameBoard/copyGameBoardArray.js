import map from 'lodash/map';
import copyGameBoard from './copyGameBoard';

export default function copyGameBoardArray( gbps ) {
	return map( gbps, copyGameBoard );
}
