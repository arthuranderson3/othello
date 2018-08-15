import _ from 'lodash';

export function toIdx({ row, col }) {
  if (_.isUndefined(row) || _.isUndefined(col)) {
    return undefined;
  }
  if (row < 0 || row > 7 || col < 0 || col > 7) {
    return undefined;
  }
  return row * 8 + col;
}
