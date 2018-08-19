import _ from 'lodash';
import toOppositePlayer from './toOppositePlayer';

export default function findMovesInDirection(direction, pieces) {
  /*
* if the adjacent tile is the opposite player keep going
*    if this direction also ends with same player return true.
*/
  let potentialMoves = [];
  let next_idx = direction(pieces.idx);
  const opp = toOppositePlayer(pieces);
  let adjacent_is_opposite = false;
  do {
    if (next_idx > -1) {
      let adj_player = pieces.squares[next_idx];

      /*
        * are we next to or ending with an undefined square?
        */
      if (_.isUndefined(adj_player)) {
        return [];
      }

      /*
        * are we adjacent to the same piece we are?
        */
      if (!adjacent_is_opposite && adj_player === pieces.player) {
        return [];
      }

      /*
        *  are we adjacent to the opposing player
        */
      if (adj_player === opp.player) {
        adjacent_is_opposite = true;
        potentialMoves.push(next_idx);
        /*
                    * now iterate this direction and return false if no same player
                    */
        next_idx = direction(next_idx);
      } else if (adjacent_is_opposite && pieces.player === adj_player) {
        return potentialMoves.slice();
      }
    }
  } while (next_idx > -1 && next_idx < 64);
}
