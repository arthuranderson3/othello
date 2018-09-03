import concat from 'lodash.concat';
import foreach from 'lodash.foreach';
import slice from 'lodash.slice';
import {
  top,
  topRight,
  topLeft,
  right,
  bottom,
  bottomRight,
  bottomLeft,
  left,
} from '../boardNavigation';
import findMovesInDirection from './findMovesInDirection';

export default function accumulateIdxForMove(pieces, squaresArr) {
  let movement = [pieces.idx];
  //
  // move in each direction to find all the squares that will turn
  //
  foreach([top, topRight, topLeft, right, bottom, bottomRight, bottomLeft, left], dir =>
    movement = concat(movement, findMovesInDirection(pieces, squaresArr, dir))
  );
  return slice(movement);
}
