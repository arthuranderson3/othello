import toOppositePlayer from './toOppositePlayer';

export default function findMovesInDirection({ index, player }, { squaresArr }, direction) {
  /*
* if the adjacent tile is the opposite player keep going
*    if this direction also ends with same player return true.
*/
  let potentialMoves = [];
  let next_index = direction(index);
  const opp = toOppositePlayer({ player });
  let adjacent_is_opposite = false;
  do {
    if (next_index > -1) {
      let adj_player = squaresArr[next_index];

      /*
      * are we next to or ending with an undefined square?
      */
      if (adj_player === undefined) {
        return [];
      }

      /*
      * are we adjacent to the same piece we are?
      */
      if (!adjacent_is_opposite && adj_player === player) {
        return [];
      }

      /*
        *  are we adjacent to the opposing player
        */
      if (adj_player === opp.player) {
        adjacent_is_opposite = true;
        potentialMoves.push(next_index);
        /*
        * now iterate this direction and return false if no same player
        */
        next_index = direction(next_index);
      } else if (adjacent_is_opposite && player === adj_player) {
        return potentialMoves.slice();
      }
    }
  } while (next_index > -1 && next_index < 64);
}
