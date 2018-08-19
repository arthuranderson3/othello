import toIdx from './toIdx';

describe('toIdx Test Suite', () => {
  it('#toIdx -- Idx for Row and Col', () => {
    expect(toIdx({ row: 0, col: 0 })).toBe(0);
    expect(toIdx({ row: 0, col: 1 })).toBe(1);
    expect(toIdx({ row: 1, col: 0 })).toBe(8);
    expect(toIdx({ row: 1, col: 1 })).toBe(9);
    expect(toIdx({ row: 1, col: 2 })).toBe(10);
  });

  it('#toIdx -- out of bounds for toIdx', () => {
    expect(toIdx({ row: 0, col: undefined })).toBeUndefined();
    expect(toIdx({ row: undefined, col: 0 })).toBeUndefined();
  });
});
