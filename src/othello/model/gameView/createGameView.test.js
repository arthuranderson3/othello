import createGameView from './createGameView';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('createGameView test suite', () => {
  it('#createGameView ', () => {
    const { view } = createGameView( [createGameBoardPieces()] );
    expect(view).toHaveProperty('currentPlayer');
    expect(view).toHaveProperty('currentTurn');
    expect(view).toHaveProperty('lastTurnTime');
    expect(view).toHaveProperty('score');
  });
});
