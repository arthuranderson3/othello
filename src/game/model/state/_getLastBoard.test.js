import { getLastBoard } from './_getLastBoard';
import { createGameState } from './_createGameState';

describe('getLastBoard test suite', () => {
  it('getLastBoard#success', () => {
    const state = createGameState();
    const expected = state.history[0];
    const actual = getLastBoard(state);
    expect(actual.player).toBe(expected.player);
    expect(actual.squares).toEqual(expect.arrayContaining(expected.squares));
  });
});
