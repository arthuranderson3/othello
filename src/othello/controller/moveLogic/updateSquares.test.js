import updateSquares from './updateSquares';
import { toSquaresArray } from '../../model/gameBoardPieces';
import { createGameBoardPieces } from '../../model/gameBoardPieces';

describe('updateSquares Test Suite', () => {
  it('updateSquares', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const squaresArr = toSquaresArray(pieces);
    let newPieces = updateSquares(pieces, squaresArr);
    expect(newPieces.squaresArr[27]).toBe('W');
    expect(newPieces.squaresArr[28]).toBe('W');
    expect(newPieces.squaresArr[29]).toBe('W');
    expect(newPieces.squaresArr[35]).toBe('B');
    expect(newPieces.squaresArr[36]).toBe('W');
  });
});
