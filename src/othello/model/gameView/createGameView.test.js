import createGameView from './createGameView';
import createGameBoard from '../gameBoard/createGameBoard';

describe('createGameView test suite', () => {
  let view;
  beforeAll( () => {
    const game = createGameView( [createGameBoard()] );
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
