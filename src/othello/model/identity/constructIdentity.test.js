import constructIdentity from './constructIdentity';

describe('constructIdentity suite', () => {
  describe('constructIdentity default', () => {
    let result;
    beforeAll( () => {
      result = constructIdentity();
    });
    it( 'result.id', () => {
      expect(result).toHaveProperty('id');
    });
  });
});
