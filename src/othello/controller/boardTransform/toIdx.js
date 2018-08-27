import isUndefined from 'lodash.isundefined';

export default function toIdx({ row, col }) {
  if (isUndefined(row) || isUndefined(col)) {
    return undefined;
  }
  if (row < 0 || row > 7 || col < 0 || col > 7) {
    return undefined;
  }
  return row * 8 + col;
}
