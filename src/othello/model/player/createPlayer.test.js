import constructPlayer from './constructPlayer';
import createPlayer from './createPlayer';

describe('createPlayer suite', () => {
  describe('createPlayer properties', () => {
    let player;
    beforeAll( () => {
      player = createPlayer();
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

  describe('createPlayer named', () => {
    let player;
    beforeAll( () => {
      const named = constructPlayer('Bob', 'W', 'Etc/UTC-0');
      player = createPlayer(named);
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
