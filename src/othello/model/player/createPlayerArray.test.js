import constructPlayer from './constructPlayer';
import createPlayerArray from './createPlayerArray';

describe('createPlayerArray suite', () => {
  it('createPlayerArray#default', () => {
		const players = [ constructPlayer('Bob', 'W','Etc/UTC-0'), constructPlayer('Rene', 'B', 'America/Louisville')];
    const players2 = createPlayerArray( players );
		expect( players2.length ).toEqual(2);
  });
});
