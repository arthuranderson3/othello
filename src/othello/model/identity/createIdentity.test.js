import createIdentity from './createIdentity';

describe('createIdentity suite', () => {
  it('createIdentity#default', () => {
    const result = createIdentity();
    expect(result).toHaveProperty('id');
  });

  it('createIdentity#copy', () => {
    const identity = createIdentity();
    const result = createIdentity(identity);
    expect(result).toEqual(identity);
  });
});
