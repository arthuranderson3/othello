import createGame from '../game/createGame';
import createGameBoard from '../gameBoard/createGameBoard';

export default function resetBoard( state ) {
  return createGame( { ...state, ...{ history: [createGameBoard()] } } );
}
