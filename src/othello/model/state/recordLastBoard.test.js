import recordLastBoard from './recordLastBoard';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('recordLastBoard test suite', () => {
  it('recordLastBoard#success', () => {
    const gbp = createGameBoardPieces();
    const history = [gbp];
    const newGbp = createGameBoardPieces({ ...gbp, idx: 20 });
    const newGameRecords = history.concat(newGbp);
    const record = recordLastBoard({ history }, newGbp);
    expect(record.history).toEqual(newGameRecords);
    expect(record.history.length).toEqual(2);
  });
});
