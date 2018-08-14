import { GameBoardPieces } from '../../model';
import { findMovesInDirection } from './_findMovesInDirection';
import { left } from '../boardNavigation';

describe('toOppositePlayer Test Suite', () => {
  it('findMovesInDirection', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    expect(findMovesInDirection(left, pieces)).toEqual(
      expect.arrayContaining([28])
    );
  });
});
