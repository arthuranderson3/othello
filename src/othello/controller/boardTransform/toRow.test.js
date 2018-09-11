import toRow from './toRow';

describe('toRow Test Suite', () => {
  it('toRow(7)=0', () => {
    expect(toRow(7)).toBe(0);
  });
  it('toRow(8)=1', () => {
    expect(toRow(8)).toBe(1);
  });
  it('toRow(15)=1', () => {
    expect(toRow(15)).toBe(1);
  });
  it('toRow(16)=2', () => {
    expect(toRow(16)).toBe(2);
  });
  it('toRow(23)=2', () => {
    expect(toRow(23)).toBe(2);
  });
  it('toRow(24)=3', () => {
    expect(toRow(24)).toBe(3);
  });
  it('toRow(65).undefined', () => {
    expect(toRow(65)).toBeUndefined();
  });
});
