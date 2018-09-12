import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { toSquaresArray } from '../../model/gameBoardPieces';
import findMovesInDirection from './findMovesInDirection';
import { left } from '../boardNavigation';

describe('findMovesInDirection Test Suite', () => {
  describe('initial board', () => {
    let moves;
    beforeAll( () => {
      const pieces = createGameBoardPieces();
      pieces.index = 29;
      moves = findMovesInDirection( pieces, toSquaresArray( pieces ), left );
    });
    it('moves.length=1', () => {
      expect( moves.length ).toEqual( 1 );
    });
    it('moves=[28]', () => {
      expect( moves ).toEqual([28]);
    });
  });
});
