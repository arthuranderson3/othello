import createGameState from './createGameState';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('_createGameState test suite', () => {
  it('createGameState# default', () => {
    const gbp = createGameBoardPieces();
    const gameState = createGameState();
    expect(gameState.history.length).toEqual(1);
    expect(gameState.history[0].idx).toBeUndefined();
    expect(gameState.history[0].squares_obj).toEqual(gbp.squares_obj);
  });
});
