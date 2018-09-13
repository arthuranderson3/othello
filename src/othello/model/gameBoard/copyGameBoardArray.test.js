import copyGameBoardArray from './copyGameBoardArray';
import constructGameBoard from './constructGameBoard';

describe('copyGameBoardArray suite', () => {
  describe('using initial gameboard', () => {
    let pieces;
    beforeAll( () => {
      pieces = copyGameBoardArray( [ constructGameBoard() ]);
    });
    it('pieces.length=1', () => {
      expect(pieces.length).toEqual(1);
    });
  });
});
