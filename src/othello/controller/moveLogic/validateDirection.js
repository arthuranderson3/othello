import isUndefined from 'lodash.isundefined';
import toOppositePlayer from './toOppositePlayer';

/*************************************************************
 *
 * Check each direction, same logic, walk the path if at first
 * an opposing piece is adjacent, then stop and succeed if it ends
 * the same piece.
 *
 *************************************************************/

export default function validateDirection({ idx, player, squares_arr }, direction) {
  /*
    * if the adjacent tile is the opposite player keep going
    *    if this direction also ends with same player return true.
    */
  let next_idx = direction(idx);
  const opp = toOppositePlayer({ player });
  let adjacent_is_opposite = false;
  do {
    if (next_idx > -1) {
      let adj_player = squares_arr[next_idx];

      /*
            * are we next to or ending with an undefined square?
            */
      if (isUndefined(adj_player)) {
        return false;
      }

      /*
            * are we adjacent to the same piece we are?
            */
      if (!adjacent_is_opposite && adj_player === player) {
        return false;
      }

      /*
            *  are we adjacent to the opposing player
            */
      if (adj_player === opp.player) {
        adjacent_is_opposite = true;
        /*
                * now iterate this direction and return false if no same player
                */
        next_idx = direction(next_idx);
      } else if (adjacent_is_opposite && player === adj_player) {
        return true;
      }
    }
  } while (next_idx > -1 && next_idx < 64);
}