import forIn from 'lodash.forin';

export default function countSquareColor(color, { squaresObj }) {
  let count = 0;
  forIn(squaresObj, value => (value === color ? count++ : undefined));
  return count;
}
