import resetBoard from './resetBoard';
import constructGame from './constructGame';
import DEFAULT_SQUARES from '../gameBoard/DEFAULT_SQUARES';

describe('resetBoard test suite', () => {
  let reset;
  let game;

  beforeAll( () => {
    game = constructGame('resetBoardGame', 'resetter');
    reset = resetBoard(game);
  });
  it('reset.name=game.name', () => {
    expect(reset.name).toEqual(game.name);
  });
  it('reset.players[0].name=game.players[0].name', () => {
    expect(reset.players[0].name).toEqual(game.players[0].name);
  });
  it('reset.players[0].color=game.players[0].color', () => {
    expect(reset.players[0].color).toEqual(game.players[0].color);
  });
  it('reset.players[0].tz=game.players[0].tz', () => {
    expect(reset.players[0].tz).toEqual(game.players[0].tz);
  });
  it('reset.players[1].name=game.players[1].name', () => {
    expect(reset.players[1].name).toEqual(game.players[1].name);
  });
  it('reset.players[1].color=game.players[1].color', () => {
    expect(reset.players[1].color).toEqual(game.players[1].color);
  });
  it('reset.players[1].tz=game.players[1].tz', () => {
    expect(reset.players[1].tz).toEqual(game.players[1].tz);
  });
  it('reset.snapshots.length=1', () => {
    expect(reset.snapshots.length).toEqual(1);
  });
  it('reset.snapshots[0].squaresObj=', () => {
    expect(reset.snapshots[0].squaresObj).toEqual(DEFAULT_SQUARES);
  });
  it('reset.snapshots[0].turn=1', () => {
    expect(reset.snapshots[0].turn).toEqual(1);
  });
  it('reset.snapshots[0].player=W', () => {
    expect(reset.snapshots[0].player).toEqual('W');
  });
});
