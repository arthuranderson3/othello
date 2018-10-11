import constructGameView from './constructGameView';
import constructGameBoard from '../gameBoard/constructGameBoard';

describe('constructGameView test suite', () => {
  let view;
  beforeAll(() => {
    const game = constructGameView([constructGameBoard()]);
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
  it('view.gameStatus', () => {
    expect(view).toHaveProperty('gameStatus');
  });
});
