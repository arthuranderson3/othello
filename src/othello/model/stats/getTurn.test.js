import GameBoardPieces from '../GameBoardPieces';
import getTurn from './getTurn';

describe('_getTurn test suite', () => {
  it('getTurn# success', () => {
    expect(getTurn({ history: [new GameBoardPieces()] })).toBe(1);
  });

  it('getTurn# undefined', done => {
    try {
      getTurn();
      done(new Error('expected to throw an error'));
    } catch (error) {
      done();
    }
  });
});
