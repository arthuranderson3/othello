import dropRight from 'lodash.dropright';
import copyGame from './copyGame';

export default function undoMove(state) {
  if (state.snapshots && state.snapshots.length > 2) {
    return copyGame({ ...state, ...{ snapshots: dropRight(dropRight(state.snapshots)) } });
  } else {
    return state;
  }
}
