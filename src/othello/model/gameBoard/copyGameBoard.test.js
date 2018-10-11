import constructGameBoard from './constructGameBoard';
import copyGameBoard from './copyGameBoard';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

describe('copyGameBoard suite', () => {
  describe('default initial board properties', () => {
    let pieces;
    beforeAll(() => {
      pieces = copyGameBoard(constructGameBoard());
    });
    it('pieces.id', () => expect(pieces).toHaveProperty('id'));
    it('pieces.gameStatus', () => expect(pieces).toHaveProperty('gameStatus'));
    it('pieces.player', () => {
      expect(pieces).toHaveProperty('player');
    });
    it('pieces.squaresObj', () => {
      expect(pieces).toHaveProperty('squaresObj');
    });
    it('pieces.turn', () => {
      expect(pieces).toHaveProperty('turn');
    });
    it('pieces.index', () => {
      expect(pieces).toHaveProperty('index');
    });
    it('pieces.validSquares', () => {
      expect(pieces).toHaveProperty('validSquares');
    });
  });

  describe('default initial board values', () => {
    let pieces;
    beforeAll(() => {
      pieces = copyGameBoard(constructGameBoard());
    });
    it('pieces.player=W', () => {
      expect(pieces.player).toEqual('W');
    });
    it('pieces.gameStatus=WHITE_TURN', () => {
      expect(pieces.gameStatus).toEqual('WHITE_TURN');
    });
    it('pieces.index=undefined', () => {
      expect(pieces.index).toBeUndefined();
    });
    it('pieces.squaresObj=DEFAULT_SQUARES', () => {
      expect(pieces.squaresObj).toEqual(DEFAULT_SQUARES);
    });
    it('pieces.turn=1', () => {
      expect(pieces.turn).toEqual(1);
    });
    it('pieces.validSquares = [20,29,34,43]', () => {
      expect(pieces.validSquares).toEqual([20, 29, 34, 43]);
    });
  });
});
