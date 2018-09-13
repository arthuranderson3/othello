import concat from 'lodash/concat';
import createGame from '../game/createGame';

export default function recordLastBoard(state, gb) {
  return createGame( { ...state, ...{ history: concat( state.history, gb ) } });
}
