import copyGame from './copyGame';
import constructGameBoard from '../gameBoard/constructGameBoard';

export default function reset( state ) {
  return copyGame( { ...state, ...{ snapshots: [constructGameBoard()] } } );
}
