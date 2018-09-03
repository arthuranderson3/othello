import constructIdentity from './constructIdentity';

describe('constructIdentity suite', () => {
  it('constructIdentity#default', () => {
    const result = constructIdentity();
    expect(result).toHaveProperty('id');
  });
});
