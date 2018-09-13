import dropRight from 'lodash.dropright';
import copyGame from './copyGame';

export default function undoMove( state ) {
  return copyGame({ ...state, ...{ history: dropRight(state.history) } });
}
