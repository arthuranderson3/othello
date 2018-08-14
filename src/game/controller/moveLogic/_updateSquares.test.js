import { updateSquares } from './_updateSquares';
import { GameBoardPieces } from '../../model';

describe('updateSquares Test Suite', () => {
  it('updateSquares', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    let newPieces = updateSquares(pieces);
    expect(newPieces.squares[27]).toBe('W');
    expect(newPieces.squares[28]).toBe('W');
    expect(newPieces.squares[29]).toBe('W');
    expect(newPieces.squares[35]).toBe('B');
    expect(newPieces.squares[36]).toBe('W');
  });
});
