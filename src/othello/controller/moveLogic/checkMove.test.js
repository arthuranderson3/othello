import checkMove from './checkMove';
import GameState from '../../model/GameState';

describe('checkMove Test Suite', () => {
  it('checkMove#success', done => {
    const state = new GameState();
    checkMove(29, state)
      .then(state => {
        expect(state.history.length).toBe(2);
        done();
      })
      .catch(err => done(err));
  });
});
