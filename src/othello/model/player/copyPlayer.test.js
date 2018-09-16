import constructPlayer from './constructPlayer';
import copyPlayer from './copyPlayer';

describe('copyPlayer suite', () => {
  describe('copyPlayer properties', () => {
    let player;
    beforeAll( () => {
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
    it('player.tz', () => {
      expect(player).toHaveProperty('tz');
    })
  });

  describe('copyPlayer named', () => {
    let player;
    beforeAll( () => {
      player = copyPlayer(constructPlayer('Bob', 'W', 'Etc/UTC-0'));
    });
    it('player.name=Bob', () => {
      expect(player.name).toEqual('Bob');
    });
    it('player.color=W', () => {
      expect(player.color).toEqual('W');
    });
    it('player.tz=Etc/UTC-0', () => {
      expect(player.tz).toEqual('Etc/UTC-0');
    });
  });
});
