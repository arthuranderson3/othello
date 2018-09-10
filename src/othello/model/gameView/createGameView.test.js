import createGameView from './createGameView';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('createGameView test suite', () => {
  it('#createGameView ', () => {
    const gv = createGameView( [createGameBoardPieces()] );
    expect(gv).toHaveProperty('currentPlayer');
    expect(gv).toHaveProperty('currentTurn');
    expect(gv).toHaveProperty('lastTurnTime');
    expect(gv).toHaveProperty('score');
  });
});
