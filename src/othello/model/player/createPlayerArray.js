import map from 'lodash/map';
import createPlayer from './createPlayer';

export default function createPlayerArray( players ) {
	return map( players, createPlayer );
}
