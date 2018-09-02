import constructIdentity from './constructIdentity';

describe('constructIdentity suite', () => {
  it('constructIdentity#default', () => {
    const result = constructIdentity('test');
    expect(result).toHaveProperty('id');
  });
});
