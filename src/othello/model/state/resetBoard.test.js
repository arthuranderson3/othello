import resetBoard from './resetBoard';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';

describe('resetBoard test suite', () => {
  it('resetBoard#success', () => {
    const gbp = createGameBoardPieces();
    const history = [{ ...gbp }];
    const reset = resetBoard();
    expect(reset).toEqual({ history });
  });
});
