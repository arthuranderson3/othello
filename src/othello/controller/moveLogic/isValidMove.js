import isUndefined from 'lodash.isundefined';
import validateDirection from './validateDirection';
import * as bn from '../boardNavigation';

/*************************************************************
 *
 * check the board against the current choice of move to see if
 * it is a valid move or not
 * REF: can refactor this into seperate async checks and join at end
 *
 *************************************************************/
export default function isValidMove(pieces) {
  // we have an open square?
  if (isUndefined(pieces.squares_arr[pieces.idx])) {
    let validMove = false;
    //
    // we are adjacent to opposing player with player's square enclosing the line.
    // Keep track of validMove to speed up whether or not this is a valid move.
    //
    if (validateDirection(pieces, bn.top)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.topRight)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.topLeft)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.right)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.left)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.bottom)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.bottomRight)) {
      validMove = true;
    }
    if (!validMove && validateDirection(pieces, bn.bottomLeft)) {
      validMove = true;
    }

    return validMove;
  } else {
    return false;
  }
}
