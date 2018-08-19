import _ from 'lodash';
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
  if (_.isUndefined(pieces.squares[pieces.idx])) {
    let validMove = false;
    //
    // we are adjacent to opposing player with player's square enclosing the line.
    // Keep track of validMove to speed up whether or not this is a valid move.
    //
    if (validateDirection(bn.top, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.topRight, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.topLeft, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.right, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.left, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.bottom, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.bottomRight, pieces)) {
      validMove = true;
    }
    if (!validMove && validateDirection(bn.bottomLeft, pieces)) {
      validMove = true;
    }

    return validMove;
  } else {
    return false;
  }
}
