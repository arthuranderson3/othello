import constructPlayer from './constructPlayer';

describe('constructPlayer suite', () => {
  describe('player properties', () => {
    let player;
    beforeAll( () => {
      player = constructPlayer('Bob');
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
    });
  });
  describe('default player', () => {
    let player;
    beforeAll( () => {
      player = constructPlayer();
    });
    it('player.name=anonymous', () => {
      expect(player.name).toEqual('anonymous');
    });
    it('player.color=W', () => {
      expect(player.color).toEqual('W');
    });
    it('player.tz=America/Louisville', () => {
      expect(player.tz).toEqual('America/Louisville');
    })

  })
});
