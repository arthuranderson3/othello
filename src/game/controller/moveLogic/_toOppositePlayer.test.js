import { toOppositePlayer } from './_toOppositePlayer';

describe('toOppositePlayer Test Suite', () => {
  it('toOppositePlayer W', () => {
    expect(toOppositePlayer({ player: 'W' })).toEqual({ player: 'B' });
  });

  it('toOppositePlayer B', () => {
    expect(toOppositePlayer({ player: 'B' })).toEqual({ player: 'W' });
  });
});
