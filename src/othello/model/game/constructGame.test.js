import constructGame from './constructGame';

describe('constructGame suite', () => {
  it('constructGame# default', () => {
    const game = constructGame();
    expect(game).toHaveProperty('id');
    expect(game).toHaveProperty('startTime');
  });
});
