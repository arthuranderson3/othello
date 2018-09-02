import constructPlayer from './constructPlayer';
import createPlayer from './createPlayer';

describe('createPlayer suite', () => {
  it('createPlayer#default', () => {
    const p = createPlayer();
    expect(p).toHaveProperty('id');
    expect(p).toHaveProperty('name');
    expect(p).toHaveProperty('color');
    expect(p.name).toEqual('anonymous');
    expect(p.color).toEqual('W');
  });

  it('createPlayer# named', () => {
    const named = constructPlayer('Bob');
    const p = createPlayer(named);
    expect(p.name).toEqual('Bob');
    expect(p.color).toEqual('W');
  });
});
