import toCol from './toCol';

describe('toCol Test Suite', () => {
  it('toCol(0)=0', () => {
    expect(toCol(0)).toBe(0);
  });
  it('toCol(8)=0', () => {
    expect(toCol(8)).toBe(0);
  });
  it('toCol(9)=1', () => {
    expect(toCol(9)).toBe(1);
  });
  it('toCol(17)=1', () => {
    expect(toCol(17)).toBe(1);
  });
  it('toCol(18)=2', () => {
    expect(toCol(18)).toBe(2);
  });
});
