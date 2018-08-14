import { toCol } from './_toCol';

describe('toCol Test Suite', () => {
  it('#toCol -- Column from Idx', () => {
    expect(toCol(0)).toBe(0);
    expect(toCol(8)).toBe(0);
    expect(toCol(9)).toBe(1);
    expect(toCol(17)).toBe(1);
    expect(toCol(18)).toBe(2);
  });

  it('#toCol -- undefined for out of bounds Col idx', () => {
    expect(toCol(-1)).toBeUndefined();
    expect(toCol(64)).toBeUndefined();
  });
});
