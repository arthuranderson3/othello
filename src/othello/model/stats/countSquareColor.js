import forIn from 'lodash.forin';

export default function countSquareColor(color, { squares_obj }) {
  let count = 0;
  forIn(squares_obj, value => (value === color ? count++ : undefined));
  return count;
}
