import countSquareColor from './countSquareColor';

describe('countSquareColor test suite', () => {
  it('countSquareColor# white', () => {
    const squares = [undefined, 'W', 'B', undefined, 'W', 'W', 'B', undefined];
    expect(countSquareColor('W', { squares })).toEqual(3);
  });

  it('countSquareColor# black', () => {
    const squares = [undefined, 'W', 'B', undefined, 'W', 'W', 'B', undefined];
    expect(countSquareColor('B', { squares })).toEqual(2);
  });
});
