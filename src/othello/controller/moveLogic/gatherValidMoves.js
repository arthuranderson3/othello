import map from 'lodash.map';
import filter from 'lodash.filter';
import toSquaresObj from '../../model/gameBoardPieces/toSquaresObj';
import gatherUndefinedSquares from './gatherUndefinedSquares';
import isValidMove from './isValidMove';

function filterValidMoves( { squaresObj, player }, squaresArr ) {
	return filter( gatherUndefinedSquares( squaresArr), ({index}) => {
		return isValidMove( { squaresObj, player, index }, squaresArr );
	});
}

export default function gatherValidMoves( squaresArr, player ) {
	const squaresObj = toSquaresObj( squaresArr );
	const moves = filterValidMoves({ ...squaresObj, player }, squaresArr);
	return map( moves, ({ index }) => index );
}
