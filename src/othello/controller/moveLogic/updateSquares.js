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
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.top));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.topRight));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.topLeft));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.right));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.bottom));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.bottomRight));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.bottomLeft));
  movement = _.concat(movement, findMovesInDirection(newPieces, bn.left));

  _.each(movement, i => {
    newPieces.squares[i] = pieces.player;
  });
  return newPieces;
}
