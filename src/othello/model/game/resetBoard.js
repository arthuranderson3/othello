import copyGame from './copyGame';
import constructGameBoard from '../gameBoard/constructGameBoard';

export default function resetBoard( state ) {
  return copyGame( { ...state, ...{ history: [constructGameBoard()] } } );
}
