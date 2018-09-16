import map from 'lodash/map';
import copyPlayer from './copyPlayer';

export default function copyPlayerArray( players ) {
	return map( players, copyPlayer );
}
