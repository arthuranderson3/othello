import createGameBoardArray from './createGameBoardArray';
import createGameBoard from './createGameBoard';

describe('createGameBoardArray suite', () => {
  describe('using initial gameboard', () => {
    let pieces;
    beforeAll( () => {
      pieces = createGameBoardArray( [ createGameBoard() ]);
    });
    it('pieces.length=1', () => {
      expect(pieces.length).toEqual(1);
    });
  });
});
