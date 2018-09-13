import recordSnapshot from './recordSnapshot';
import constructGameBoard from '../gameBoard/constructGameBoard';
import copyGameBoard from '../gameBoard/copyGameBoard';

describe('recordSnapshot test suite', () => {
  it('recordSnapshot#success', () => {
    const gbp = constructGameBoard();
    const snapshots = [gbp];
    const newGbp = copyGameBoard({ ...gbp, idx: 20 });
    const newSnapshots = snapshots.concat(newGbp);
    const record = recordSnapshot({ snapshots }, newGbp);
    expect(record.snapshots).toEqual(newSnapshots);
    expect(record.snapshots.length).toEqual(2);
  });
});
