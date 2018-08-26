import _ from 'lodash';

export default function countSquareColor(color, { squares_obj }) {
  let count = 0;
  _.forIn(squares_obj, (value, key) => (value === color ? count++ : undefined));
  return count;
}
