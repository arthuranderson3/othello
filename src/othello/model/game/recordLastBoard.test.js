import recordLastBoard from './recordLastBoard';
import constructGameBoard from '../gameBoard/constructGameBoard';
import copyGameBoard from '../gameBoard/copyGameBoard';

describe('recordLastBoard test suite', () => {
  it('recordLastBoard#success', () => {
    const gbp = constructGameBoard();
    const history = [gbp];
    const newGbp = copyGameBoard({ ...gbp, idx: 20 });
    const newGameRecords = history.concat(newGbp);
    const record = recordLastBoard({ history }, newGbp);
    expect(record.history).toEqual(newGameRecords);
    expect(record.history.length).toEqual(2);
  });
});
