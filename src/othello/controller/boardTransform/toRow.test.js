import toRow from './toRow';

describe('toRow Test Suite', () => {
  it('#toRow -- Row from Idx', () => {
    expect(toRow(7)).toBe(0);
    expect(toRow(8)).toBe(1);
    expect(toRow(15)).toBe(1);
    expect(toRow(16)).toBe(2);
    expect(toRow(23)).toBe(2);
    expect(toRow(24)).toBe(3);
  });
});
