import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';
import getLastBoard from './getLastBoard';
import createGameState from './createGameState';

describe('getLastBoard test suite', () => {
  it('getLastBoard#success', () => {
    const board = createGameBoardPieces();
    const state = createGameState([board]);
    const actual = getLastBoard(state);
    expect(actual).toEqual(board);
  });
});
