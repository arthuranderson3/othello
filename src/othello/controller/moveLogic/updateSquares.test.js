import updateSquares from './updateSquares';
import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { expandGameBoardPieces } from '../../model/gameBoardPieces';

describe('updateSquares Test Suite', () => {
  it('updateSquares', () => {
    const pieces = createGameBoardPieces();
    pieces.idx = 29;
    const ep = expandGameBoardPieces(pieces);
    let newPieces = updateSquares(ep);
    expect(newPieces.squares_arr[27]).toBe('W');
    expect(newPieces.squares_arr[28]).toBe('W');
    expect(newPieces.squares_arr[29]).toBe('W');
    expect(newPieces.squares_arr[35]).toBe('B');
    expect(newPieces.squares_arr[36]).toBe('W');
  });
});
