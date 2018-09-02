import foreach from 'lodash.foreach';
import accumulateIdxForMove from './accumulateIdxForMove';
/*************************************************************
 *
 * Create a list of all the squares that need to be updated
 * then update them all at the end.
 *
 *************************************************************/
export default function updateSquares(pieces) {
  const moveIdx = accumulateIdxForMove(pieces);
  const newPieces = { ...pieces };
  foreach(moveIdx, i => {
    newPieces.squares_arr[i] = pieces.player;
  });
  return newPieces;
}
