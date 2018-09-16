import dropRight from 'lodash.dropright';
import copyGame from './copyGame';

export default function undoMove( state ) {
  if( state.snapshots.length > 1 ){
    return copyGame({ ...state, ...{ snapshots: dropRight(state.snapshots) } });
  } else {
    return state;
  }
}
