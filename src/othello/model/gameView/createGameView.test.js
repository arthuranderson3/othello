import createGameView from './createGameView';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('createGameView test suite', () => {
  let view;
  beforeAll( () => {
    const game = createGameView( [createGameBoardPieces()] );
    view = game.view;
  });
  it('view.currentPlayer', () => {
    expect(view).toHaveProperty('currentPlayer');
  });
  it('view.currentTurn', () => {
    expect(view).toHaveProperty('currentTurn');
  });
  it('view.lastTurnTime', () => {
    expect(view).toHaveProperty('lastTurnTime');
  });
  it('view.score', () => {
    expect(view).toHaveProperty('score');
  });
});
