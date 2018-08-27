import concat from 'lodash.concat';
import each from 'lodash.foreach';
import * as bn from '../boardNavigation';
import findMovesInDirection from './findMovesInDirection';
/*************************************************************
 *
 * Create a list of all the squares that need to be updated
 * then update them all at the end.
 *
 *************************************************************/
export default function updateSquares({ idx, player, squares_arr }) {
  let movement = [idx];
  let newPieces = { idx, player, squares_arr };
  //
  // accumulate all the board squares that will turn
  //
  movement = concat(movement, findMovesInDirection(newPieces, bn.top));
  movement = concat(movement, findMovesInDirection(newPieces, bn.topRight));
  movement = concat(movement, findMovesInDirection(newPieces, bn.topLeft));
  movement = concat(movement, findMovesInDirection(newPieces, bn.right));
  movement = concat(movement, findMovesInDirection(newPieces, bn.bottom));
  movement = concat(movement, findMovesInDirection(newPieces, bn.bottomRight));
  movement = concat(movement, findMovesInDirection(newPieces, bn.bottomLeft));
  movement = concat(movement, findMovesInDirection(newPieces, bn.left));

  each(movement, i => {
    newPieces.squares_arr[i] = player;
  });
  return newPieces;
}
