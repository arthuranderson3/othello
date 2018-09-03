import constructGame from './constructGame';

describe('constructGame suite', () => {
  it('constructGame# default', () => {
    const game = constructGame();
    // console.info( JSON.stringify(game) );
    // console.info( game );
    expect(game).toHaveProperty('name');
    expect(game).toHaveProperty('id');
    expect(game).toHaveProperty('startTime');
    expect(game).toHaveProperty('players');
    expect(game).toHaveProperty('history');
    expect(game).toHaveProperty('view');
    expect(game.name).toEqual('anonymous');
    expect(game.players.length).toEqual(2);
    expect(game.history.length).toEqual(1);
  });
  it('constructGame# Game Name', () => {
    const game = constructGame('firstGame');
    expect( game.name).toEqual('firstGame');
  });
});
