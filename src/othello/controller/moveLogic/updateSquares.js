import _ from 'lodash';
import * as bn from '../boardNavigation';
import findMovesInDirection from './findMovesInDirection';
import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';

/*************************************************************
 *
 * Create a list of all the squares that need to be updated
 * then update them all at the end.
 *
 *************************************************************/
export default function updateSquares(pieces) {
  let movement = [pieces.idx];
  let newPieces = createGameBoardPieces(pieces);
  //
  // accumulate all the board squares that will turn
  //
  movement = _.concat(movement, findMovesInDirection(bn.top, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.topRight, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.topLeft, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.right, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.bottom, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.bottomRight, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.bottomLeft, newPieces));
  movement = _.concat(movement, findMovesInDirection(bn.left, newPieces));

  _.each(movement, i => {
    newPieces.squares[i] = pieces.player;
  });
  return newPieces;
}
