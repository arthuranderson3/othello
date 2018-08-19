import GameBoardPieces from '../../model/GameBoardPieces';
import findMovesInDirection from './findMovesInDirection';
import left from '../boardNavigation/left';

describe('toOppositePlayer Test Suite', () => {
  it('findMovesInDirection', () => {
    const pieces = new GameBoardPieces();
    pieces.idx = 29;

    expect(findMovesInDirection(left, pieces)).toEqual(
      expect.arrayContaining([28])
    );
  });
});
