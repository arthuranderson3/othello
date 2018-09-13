import copyIdentity from './copyIdentity';
import constructIdentity from './constructIdentity';

describe('copyIdentity suite', () => {
  it('default', () => {
    const identity = constructIdentity();
    const result = copyIdentity(identity);
    expect(result).toEqual(identity);
  });
});
