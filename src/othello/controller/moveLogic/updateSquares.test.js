import updateSquares from './updateSquares';
import { toSquaresArray } from '../../model/gameBoardPieces';
import { createGameBoardPieces } from '../../model/gameBoardPieces';

describe('updateSquares Test Suite', () => {
  it('updateSquares', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const squaresArr = toSquaresArray(pieces);
    let newPieces = updateSquares(pieces, squaresArr);
    expect(newPieces.squaresObj[27]).toBe('W');
    expect(newPieces.squaresObj[28]).toBe('W');
    expect(newPieces.squaresObj[29]).toBe('W');
    expect(newPieces.squaresObj[35]).toBe('B');
    expect(newPieces.squaresObj[36]).toBe('W');
  });
});
