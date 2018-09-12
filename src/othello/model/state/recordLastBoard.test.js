import recordLastBoard from './recordLastBoard';
import createGameBoard from '../gameBoard/createGameBoard';

describe('recordLastBoard test suite', () => {
  it('recordLastBoard#success', () => {
    const gbp = createGameBoard();
    const history = [gbp];
    const newGbp = createGameBoard({ ...gbp, idx: 20 });
    const newGameRecords = history.concat(newGbp);
    const record = recordLastBoard({ history }, newGbp);
    expect(record.history).toEqual(newGameRecords);
    expect(record.history.length).toEqual(2);
  });
});
