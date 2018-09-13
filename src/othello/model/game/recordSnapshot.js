import concat from 'lodash/concat';
import copyGame from './copyGame';

export default function recordSnapshot(state, gb) {
  return copyGame( { ...state, ...{ snapshots: concat( state.snapshots, gb ) } });
}
