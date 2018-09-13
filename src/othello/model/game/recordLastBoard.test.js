import recordLastBoard from './recordLastBoard';
import constructGameBoard from '../gameBoard/constructGameBoard';
import copyGameBoard from '../gameBoard/copyGameBoard';

describe('recordLastBoard test suite', () => {
  it('recordLastBoard#success', () => {
    const gbp = constructGameBoard();
    const snapshots = [gbp];
    const newGbp = copyGameBoard({ ...gbp, idx: 20 });
    const newGameRecords = snapshots.concat(newGbp);
    const record = recordLastBoard({ snapshots }, newGbp);
    expect(record.snapshots).toEqual(newGameRecords);
    expect(record.snapshots.length).toEqual(2);
  });
});
