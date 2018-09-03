import slice from 'lodash/slice';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';
import constructIdentity from '../identity/constructIdentity';
import createValidSquares from './createValidSquares';
import toSquaresObj from './toSquaresObj';

const defaultGameBoard = {
  ...constructIdentity(),
  squaresObj: DEFAULT_SQUARES,
  player: 'W',
  turn: 1,
  idx: undefined,
  ...createValidSquares( [20, 29, 34, 43] )
};

//
// using an object variable allows for undefined optional parameters
// object destructuring causes errors to be thrown when we have undefined parameter.
//
export default function createGameBoardPieces( { id, squaresObj, player, turn, idx, validSquares } = defaultGameBoard) {
  return { id, squaresObj, player, turn, idx, validSquares: [ ...validSquares] };
}
