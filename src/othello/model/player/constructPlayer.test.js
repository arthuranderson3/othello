import constructPlayer from './constructPlayer';

describe('constructPlayer suite', () => {
  it('constructPlayer# named', () => {
    const p = constructPlayer('Bob');
    expect(p).toHaveProperty('id');
    expect(p).toHaveProperty('name');
    expect(p).toHaveProperty('color');
    expect(p.name).toEqual('Bob');
    expect(p.color).toEqual('W');
  });

  it('constructPlayer# default', () => {
    const p = constructPlayer();
    expect(p).toHaveProperty('id');
    expect(p).toHaveProperty('name');
    expect(p).toHaveProperty('color');
    expect(p.name).toEqual('anonymous');
    expect(p.color).toEqual('W');
  });
});
