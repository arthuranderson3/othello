import _ from 'lodash';

export function countSquareColor(color, { squares }) {
  return _.filter(squares, square => square === color).length;
}
