import constructPlayer from './constructPlayer';

describe('constructPlayer suite', () => {
  describe('player properties', () => {
    let player;
    beforeAll(() => {
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
    it('player.type', () => {
      expect(player).toHaveProperty('type');
    });
  });
  describe('default player', () => {
    let player;
    beforeAll(() => {
      player = constructPlayer();
    });
    it('player.name=anonymous', () => {
      expect(player.name).toEqual('anonymous');
    });
    it('player.color=W', () => {
      expect(player.color).toEqual('W');
    });
    it('player.type=human', () => {
      expect(player.type).toEqual('human');
    });
  });
});
