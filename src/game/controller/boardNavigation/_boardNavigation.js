import { toRow, toCol, toIdx, createRowCol } from '../boardTransform';

export default function boardNavigation(opRow, opCol) {
  return function(i) {
    if (i + opRow < 0 || i + opCol > 64) return undefined;

    const rc = {
      row: toRow(i) + opRow,
      col: toCol(i) + opCol,
    };
    return toIdx(createRowCol(rc));
  };
}
