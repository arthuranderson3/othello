import toIdx from './toIdx';

describe('toIdx Test Suite', () => {
  it('toIdx( {row:0, col:0 })=0', () => {
    expect(toIdx({ row: 0, col: 0 })).toBe(0);
  });
  it('toIdx( {row:0, col:1 })=1', () => {
    expect(toIdx({ row: 0, col: 1 })).toBe(1);
  });
  it('toIdx( {row:1, col:0 })=8', () => {
    expect(toIdx({ row: 1, col: 0 })).toBe(8);
  });
  it('toIdx( {row:1, col:1 })=9', () => {
    expect(toIdx({ row: 1, col: 1 })).toBe(9);
  });
  it('toIdx( {row:1, col:2 })=10', () => {
    expect(toIdx({ row: 1, col: 2 })).toBe(10);
  });

  it('toIdx( { row: 0, col: undefined }).undefined', () => {
    expect(toIdx({ row: 0, col: undefined })).toBeUndefined();
  });
  it('toIdx( { row: undefined, col: 0 }).undefined', () => {
    expect(toIdx({ row: undefined, col: 0 })).toBeUndefined();
  });
  it('toIdx( { row: 10, col: 0 }).undefined', () => {
    expect(toIdx({ row: 10, col: 0 })).toBeUndefined();
  });
  it('toIdx( { row: 0, col: 10 }).undefined', () => {
    expect(toIdx({ row: 0, col: 10 })).toBeUndefined();
  });
});
