import constructIdentity from '../identity/constructIdentity';
import createValidSquares from './createValidSquares';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';
import gameStati from './gameStati';

export default function constructGameBoard() {
  return {
    ...constructIdentity(),
    squaresObj: DEFAULT_SQUARES,
    player: 'W',
    turn: 1,
    index: undefined,
    gameStatus: gameStati.WHITE_TURN,
    ...createValidSquares([20, 29, 34, 43]),
  };
}
