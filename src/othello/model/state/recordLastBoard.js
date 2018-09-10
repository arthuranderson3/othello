import concat from 'lodash/concat';
import createGame from '../game/createGame';

export default function recordLastBoard(gameState, gb) {
  return createGame( { ...gameState, ...{ history: concat( gameState.history, gb ) } });
}
