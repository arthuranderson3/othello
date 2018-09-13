import dropRight from 'lodash.dropright';
import createGame from '../game/createGame';

export default function undoMove( state ) {
  return createGame({ ...state, ...{ history: dropRight(state.history) } });
}
