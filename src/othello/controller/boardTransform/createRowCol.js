import assign from 'lodash.assign';

export default function createRowCol({ row, col }) {
  return assign({}, { row, col });
}
