import constructGame from './constructGame';

describe('constructGame suite', () => {
  describe('properties', () => {
    let game;
    beforeAll(() => {
      game = constructGame();
    });

    it('game.name', () => {
      expect(game).toHaveProperty('name');
    });
    it('game.id', () => {
      expect(game).toHaveProperty('id');
    });
    it('game.startTime', () => {
      expect(game).toHaveProperty('startTime');
    });
    it('game.players', () => {
      expect(game).toHaveProperty('players');
    });
    it('game.players.length', () => {
      expect(game.players).toHaveProperty('length');
    });
    it('game.snapshots', () => {
      expect(game).toHaveProperty('snapshots');
    });
    it('game.snapshots.length', () => {
      expect(game.snapshots).toHaveProperty('length');
    });
    it('game.view', () => {
      expect(game).toHaveProperty('view');
    });
    it('game.view.score', () => {
      expect(game.view).toHaveProperty('score');
    });
  });

  describe('default values construction', () => {
    let game;
    beforeAll(() => {
      game = constructGame();
    });

    it('game.name=anonymous', () => {
      expect(game.name).toEqual('anonymous');
    });
    it('game.players[0].name=white', () => {
      expect(game.players[0].name).toEqual('white');
    });
    it('game.players[0].color=W', () => {
      expect(game.players[0].color).toEqual('W');
    });
    it('game.players[1].name=black', () => {
      expect(game.players[1].name).toEqual('black');
    });
    it('game.players[1].color=B', () => {
      expect(game.players[1].color).toEqual('B');
    });
  });
  describe('w/params construction', () => {
    let game;
    beforeAll(() => {
      game = constructGame('test_game_name', 'player_one_name');
    });
    it('game.name=test_game_name', () => {
      expect(game.name).toEqual('test_game_name');
    });
    it('game.players[0].name=player_one_name', () => {
      expect(game.players[0].name).toEqual('player_one_name');
    });
  });
});
