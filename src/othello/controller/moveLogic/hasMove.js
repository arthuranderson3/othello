import some from 'lodash.some';
import isValidMove from './isValidMove';
import { toSquaresObj } from '../../model/gameBoard';
import gatherUndefinedSquares from './gatherUndefinedSquares';

export default function hasMove( player, squaresArr ) {
  const squaresObj = toSquaresObj( squaresArr );
  return some(gatherUndefinedSquares(squaresArr), ({ index }) => {
    return isValidMove({ ...squaresObj, player, index }, squaresArr);
  });
}
