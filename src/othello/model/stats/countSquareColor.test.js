import countSquareColor from './countSquareColor';
import toSquaresObj from '../gameBoardPieces/toSquaresObj';

describe('countSquareColor test suite', () => {
  it('countSquareColor# white', () => {
    const squares_obj = toSquaresObj([undefined, 'W', 'B', undefined, 'W', 'W', 'B', undefined]);
    expect(countSquareColor('W', { squares_obj })).toEqual(3);
  });

  it('countSquareColor# black', () => {
    const squares_obj = toSquaresObj([undefined, 'W', 'B', undefined, 'W', 'W', 'B', undefined]);
    expect(countSquareColor('B', { squares_obj })).toEqual(2);
  });
});
