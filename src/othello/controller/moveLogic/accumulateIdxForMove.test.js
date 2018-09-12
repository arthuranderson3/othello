import foreach from 'lodash.foreach';
import accumulateIdxForMove from './accumulateIdxForMove';
import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import toSquaresArray from '../../model/gameBoardPieces/toSquaresArray';

describe('accumulateIdxForMove Test Suite', () => {
  describe('initial board - index 29', () => {
    let indices;
    beforeAll( () => {
      let pieces = createGameBoardPieces();
      let squaresArr = toSquaresArray(pieces);
      pieces.index = 29;
      indices = accumulateIdxForMove(pieces, squaresArr);
    });
    it('indices.length=2', () => {
      expect(indices.length).toEqual(2);
    });
    it('indices=[29,28]', () => {
      expect(indices).toEqual([29,28]);
    });
  });

});
