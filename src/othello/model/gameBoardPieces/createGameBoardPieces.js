import slice from 'lodash/slice';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';
import constructIdentity from '../identity/constructIdentity';

const defaultGameBoard = {
  ...constructIdentity(),
  squaresObj: { ...DEFAULT_SQUARES },
  player: 'W',
  turn: 1,
  idx: undefined,
  validSquares:[20, 29, 34, 44]
};

//
// using an object variable allows for undefined optional parameters
// object destructuring causes errors to be thrown when we have undefined parameter.
//
export default function createGameBoardPieces( { id, squaresObj, player, turn, idx, validSquares } = defaultGameBoard) {
  return { id, squaresObj: { ...squaresObj } , player, turn, idx, validSquares: [ ...validSquares] };
}
