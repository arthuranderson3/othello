import createActionStartGame from './createActionStartGame';
import { START_GAME } from './othelloActionConstants';
import constructPlayer from '../model/player/constructPlayer';

describe('createActionStartGame', () => {
  let startGame;
  let payload;
  beforeAll(() => {
    startGame = createActionStartGame(
      'anonymous',
      constructPlayer('white', 'W', 'human'),
      constructPlayer('black', 'B', 'human')
    );
    payload = startGame.payload;
  });
  it('startGame.type', () => {
    expect(startGame).toHaveProperty('type');
  });
  it('startGame.type=START_GAME', () => {
    expect(startGame.type).toEqual(START_GAME);
  });
  it('startGame.payload', () => {
    expect(startGame).toHaveProperty('payload');
  });
  it('startGame.payload.gameName', () => {
    expect(payload).toHaveProperty('gameName');
  });
  it('startGame.payload.gameName=anonymous', () => {
    expect(payload.gameName).toEqual('anonymous');
  });
  it('startGame.payload.playerOne', () => {
    expect(payload).toHaveProperty('playerOne');
  });
  it('startGame.payload.playerOne.name=white', () => {
    expect(payload.playerOne.name).toEqual('white');
  });
  it('w/params payload.gameName=test_game_name', () => {
    const { type, payload } = createActionStartGame(
      'test_game_name',
      constructPlayer('player_one', 'W', 'human'),
      constructPlayer('player_two', 'B', 'human')
    );
    expect(payload.gameName).toEqual('test_game_name');
  });
  it('w/params payload.playerName=player_one', () => {
    const { type, payload } = createActionStartGame(
      'test_game_name',
      constructPlayer('player_one', 'W', 'human'),
      constructPlayer('player_two', 'B', 'computer')
    );
    expect(payload.playerOne.name).toEqual('player_one');
  });
});
