import createGame from '../game/createGame';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

export default function resetBoard( state ) {
  return createGame( { ...state, ...{ history: [createGameBoardPieces()] } } );
}
