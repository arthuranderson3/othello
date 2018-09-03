import some from 'lodash/some';
import validateDirection from './validateDirection';
import { top, topLeft, topRight, right, left, bottomLeft, bottomRight, bottom } from '../boardNavigation';

//
// we are adjacent to opposing player with player's square enclosing the line.
// Keep track of validMove to speed up whether or not this is a valid move.
//
function checkAdjacentSquares( pieces, squaresArr ) {
  return some( [top,
    topLeft,
    topRight,
    right,
    left,
    bottom,
    bottomLeft,
    bottomRight ],
    dir => validateDirection( pieces, squaresArr, dir ) );
}
/*************************************************************
 *
 * check the board against the current choice of move to see if
 * it is a valid move or not
 * REF: can refactor this into seperate async checks and join at end
 *
 *************************************************************/
export default function isValidMove(pieces, squaresArr) {
  // we have an open square?
  if (squaresArr[pieces.idx] === undefined) {
    return checkAdjacentSquares( pieces, squaresArr );
  } else {
    return false;
  }
}
