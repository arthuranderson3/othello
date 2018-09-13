import concat from 'lodash/concat';
import copyGame from './copyGame';

export default function recordLastBoard(state, gb) {
  return copyGame( { ...state, ...{ snapshots: concat( state.snapshots, gb ) } });
}
