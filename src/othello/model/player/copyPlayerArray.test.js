import constructPlayer from './constructPlayer';
import copyPlayerArray from './copyPlayerArray';

describe('copyPlayerArray suite', () => {
  it('copyPlayerArray#default', () => {
    const players = [
      constructPlayer('Bob', 'W', 'computer'),
      constructPlayer('Rene', 'B', 'human'),
    ];
    const players2 = copyPlayerArray(players);
    expect(players2.length).toEqual(2);
  });
});
