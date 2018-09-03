import constructPlayer from './constructPlayer';
import createPlayerArray from './createPlayerArray';

describe('createPlayerArray suite', () => {
  it('createPlayerArray#default', () => {
		const players = [ constructPlayer('Bob', 'W','Etc/UTC-0'), constructPlayer('Rene', 'B', 'America/Louisville')];
    const players2 = createPlayerArray( players );
		expect( players2.length ).toEqual(2);
		const player = players2[0];
    expect(player).toHaveProperty('id');
    expect(player).toHaveProperty('name');
    expect(player).toHaveProperty('color');
    expect(player).toHaveProperty('tz');
    expect(player.name).toEqual('Bob');
    expect(player.color).toEqual('W');
		expect(player.tz).toEqual('Etc/UTC-0');
  });
});
