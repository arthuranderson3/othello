import moment from 'moment';
import createGameView from './createGameView';

describe('createGameView test suite', () => {
  it('#createGameView ', () => {
    const gv = createGameView({ currentPlayer: 'W', currentTurn: 1, lastTurnTime: moment.utc().format(), score: { white: 2, black: 2 } } );
    expect(gv).toHaveProperty('currentPlayer');
    expect(gv).toHaveProperty('currentTurn');
    expect(gv).toHaveProperty('lastTurnTime');
    expect(gv).toHaveProperty('score');
  });
});
