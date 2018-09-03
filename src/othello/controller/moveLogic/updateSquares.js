import foreach from 'lodash.foreach';
import accumulateIdxForMove from './accumulateIdxForMove';
/*************************************************************
 *
 * Create a list of all the squares that need to be updated
 * then update them all at the end.
 *
 *************************************************************/
export default function updateSquares(pieces, squaresArr ) {
  const moveIdx = accumulateIdxForMove(pieces, squaresArr);
  const newSquares = [ ...squaresArr ];
  foreach(moveIdx, i => {
    newSquares[i] = pieces.player;
  });
  return { ...pieces, squaresArr:[ ...newSquares ] };
}
