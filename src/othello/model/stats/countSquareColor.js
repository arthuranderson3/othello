import _ from 'lodash';

export default function countSquareColor(color, { squares }) {
  return _.filter(squares, square => square == color).length;
}
