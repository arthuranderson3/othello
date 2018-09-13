import reset from './reset';
import constructGame from './constructGame';
import DEFAULT_SQUARES from '../gameBoard/DEFAULT_SQUARES';

describe('reset test suite', () => {
  let gameReset;
  let game;

  beforeAll( () => {
    game = constructGame('resetGame', 'resetter');
    gameReset = reset(game);
  });
  it( 'gameReset.name=game.name', () => {
    expect( gameReset.name).toEqual(game.name);
  });
  it( 'gameReset.players[0].name=game.players[0].name', () => {
    expect( gameReset.players[0].name).toEqual(game.players[0].name);
  });
  it( 'gameReset.players[0].color=game.players[0].color', () => {
    expect( gameReset.players[0].color).toEqual(game.players[0].color);
  });
  it( 'gameReset.players[0].tz=game.players[0].tz', () => {
    expect( gameReset.players[0].tz).toEqual(game.players[0].tz);
  });
  it( 'gameReset.players[1].name=game.players[1].name', () => {
    expect( gameReset.players[1].name).toEqual(game.players[1].name);
  });
  it( 'gameReset.players[1].color=game.players[1].color', () => {
    expect( gameReset.players[1].color).toEqual(game.players[1].color);
  });
  it( 'gameReset.players[1].tz=game.players[1].tz', () => {
    expect( gameReset.players[1].tz).toEqual(game.players[1].tz);
  });
  it( 'gameReset.snapshots.length=1', () => {
    expect( gameReset.snapshots.length).toEqual(1);
  });
  it( 'gameReset.snapshots[0].squaresObj=', () => {
    expect( gameReset.snapshots[0].squaresObj).toEqual(DEFAULT_SQUARES);
  });
  it( 'gameReset.snapshots[0].turn=1', () => {
    expect( gameReset.snapshots[0].turn).toEqual(1);
  });
  it( 'gameReset.snapshots[0].player=W', () => {
    expect( gameReset.snapshots[0].player).toEqual('W');
  });
});
