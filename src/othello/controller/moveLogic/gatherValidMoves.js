import map from 'lodash.map';
import filter from 'lodash.filter';
import toSquaresObj from '../../model/gameBoardPieces/toSquaresObj';
import gatherUndefinedSquares from './gatherUndefinedSquares';
import isValidMove from './isValidMove';

export default function gatherValidMoves( squaresArr, player ) {
	const squaresObj = toSquaresObj( squaresArr );
	const undefinedSquares = gatherUndefinedSquares(squaresArr);
	const moves = filter(undefinedSquares, ({ idx }) => {
		return isValidMove({ ...squaresObj, player, idx }, squaresArr);
	});
	return map( moves, ( {idx} ) => idx );;
}
