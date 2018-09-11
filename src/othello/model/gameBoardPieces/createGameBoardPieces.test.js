import createGameBoardPieces from './createGameBoardPieces';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

describe('createGameBoardPieces suite', () => {
  describe('default initial board properties', () => {
    let pieces;
    beforeAll( () => {
      pieces = createGameBoardPieces();
    });
    it('pieces.id', () => {
      expect(pieces).toHaveProperty('id');
    });
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
    beforeAll( () => {
      pieces = createGameBoardPieces();
    });
    it('pieces.player=W', () => {
      expect(pieces.player).toEqual('W');
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
      expect(pieces.validSquares).toEqual([20,29,34,43]);
    });
  });
});
