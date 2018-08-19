import createRowCol from './createRowCol';

describe('createRowCol Test Suite', () => {
  it('#createRowCol -- success', () => {
    expect(createRowCol({ row: 0, col: 0 })).toHaveProperty('row', 0);
    expect(createRowCol({ row: 0, col: 1 })).toHaveProperty('col', 1);
    expect(createRowCol({ row: 0, col: 2 })).toHaveProperty('col', 2);
  });
});
