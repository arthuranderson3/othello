import createGameBoardPiecesArray from './createGameBoardPiecesArray';
import createGameBoardPieces from './createGameBoardPieces';

describe('createGameBoardPiecesArray suite', () => {
  describe('using initial gameboard', () => {
    let pieces;
    beforeAll( () => {
      pieces = createGameBoardPiecesArray( [ createGameBoardPieces() ]);
    });
    it('pieces.length=1', () => {
      expect(pieces.length).toEqual(1);
    });
  });
});
