import constructPlayer from './constructPlayer';
import copyPlayer from './copyPlayer';

describe('copyPlayer suite', () => {
  describe('copyPlayer properties', () => {
    let player;
    beforeAll(() => {
      player = copyPlayer(constructPlayer());
    });
    it('player.id', () => {
      expect(player).toHaveProperty('id');
    });
    it('player.name', () => {
      expect(player).toHaveProperty('name');
    });
    it('player.color', () => {
      expect(player).toHaveProperty('color');
    });
    it('player.type', () => {
      expect(player).toHaveProperty('type');
    });
  });

  describe('copyPlayer named', () => {
    let player;
    beforeAll(() => {
      player = copyPlayer(constructPlayer('Bob', 'W', 'computer'));
    });
    it('player.name=Bob', () => {
      expect(player.name).toEqual('Bob');
    });
    it('player.color=W', () => {
      expect(player.color).toEqual('W');
    });
    it('player.type=computer', () => {
      expect(player.type).toEqual('computer');
    });
  });
});
