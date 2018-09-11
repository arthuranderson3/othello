import createRowCol from './createRowCol';

describe('createRowCol Test Suite', () => {
  describe('{row, col}', () => {
    let result;
    beforeAll( () => {
      result = createRowCol({ row: 0, col: 0 });
    });

    it('result.row', () => {
      expect(result).toHaveProperty('row');
    });
    it('result.col', () => {
      expect(result).toHaveProperty('col');
    });
  });

  describe('{row: 0, col: 0}', () => {
    let result;
    beforeAll( () => {
      result = createRowCol({ row: 0, col: 0 });
    });

    it('result.row=0', () => {
      expect(result.row).toEqual(0);
    });
    it('result.col=0', () => {
      expect(result.col).toEqual(0);
    });
  });
  describe('{row: 5, col: 4}', () => {
    let result;
    beforeAll( () => {
      result = createRowCol({ row: 5, col: 4 });
    });

    it('result.row=5', () => {
      expect(result.row).toEqual(5);
    });
    it('result.col=4', () => {
      expect(result.col).toEqual(4);
    });
  });
});
