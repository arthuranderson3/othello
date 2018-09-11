import constructGame from './constructGame';

describe('constructGame suite', () => {
  describe('properties', () => {
    let game;
    beforeAll( () => {
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
    it('game.history', () => {
      expect(game).toHaveProperty('history');
    });
    it('game.history.length', () => {
      expect(game.history).toHaveProperty('length');
    });
    it('game.view', () => {
      expect(game).toHaveProperty('view');
    });
  });

  describe('default values construction', () => {
    let game;
    beforeAll( () => {
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
});
