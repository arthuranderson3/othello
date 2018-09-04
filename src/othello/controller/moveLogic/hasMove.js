import some from 'lodash.some';
import isValidMove from './isValidMove';
import { toSquaresObj } from '../../model/gameBoardPieces';
import gatherUndefinedSquares from './gatherUndefinedSquares';

export default function hasMove( player, squaresArr ) {
  const squaresObj = toSquaresObj( squaresArr );
  return some(gatherUndefinedSquares(squaresArr), ({ idx }) => {
    return isValidMove({ ...squaresObj, player, idx }, squaresArr);
  });
}
