import updateSquares from './updateSquares';
import { toSquaresArray } from '../../model/gameBoard';
import { createGameBoard } from '../../model/gameBoard';

describe('updateSquares Test Suite', () => {
  it('updateSquares', () => {
    const pieces = createGameBoard();
    pieces.index = 29;
    const squaresArr = toSquaresArray(pieces);
    let newPieces = updateSquares(pieces, squaresArr);
    expect(newPieces.squaresObj[27]).toBe('W');
    expect(newPieces.squaresObj[28]).toBe('W');
    expect(newPieces.squaresObj[29]).toBe('W');
    expect(newPieces.squaresObj[35]).toBe('B');
    expect(newPieces.squaresObj[36]).toBe('W');
  });
});
