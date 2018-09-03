import map from 'lodash/map';
import createGameBoardPieces from './createGameBoardPieces';

export default function createGameBoardPiecesArray( gbps ) {
	return map( gbps, createGameBoardPieces );
}
