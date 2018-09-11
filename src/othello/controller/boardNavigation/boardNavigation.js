import toRow from '../boardTransform/toRow';
import toCol from '../boardTransform/toCol';
import toIdx from '../boardTransform/toIdx';
import createRowCol from '../boardTransform/createRowCol';

export default function boardNavigation(opRow, opCol) {
  return function(i) {
    if (i < 0 || i > 64) return undefined;

    const rc = {
      row: toRow(i) + opRow,
      col: toCol(i) + opCol,
    };
    return toIdx(createRowCol(rc));
  };
}
