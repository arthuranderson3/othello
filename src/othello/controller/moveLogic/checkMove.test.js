import checkMove from './checkMove';
import GameState from '../../model/GameState';

describe('checkMove Test Suite', () => {
  it('checkMove#success', done => {
    const state = new GameState();

    checkMove(state, 29)
      .then(state => {
        expect(state.history.length).toBe(2);
        done();
      })
      .catch(err => done(err));
  });
});
