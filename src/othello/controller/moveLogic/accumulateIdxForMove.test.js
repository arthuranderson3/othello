import foreach from 'lodash.foreach';
import accumulateIdxForMove from './accumulateIdxForMove';
import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import toSquaresArray from '../../model/gameBoardPieces/toSquaresArray';

describe('accumulateIdxForMove Test Suite', () => {
  it('accumulateIdxForMove#success', () => {
    let pieces = createGameBoardPieces();
    let squaresArr = toSquaresArray(pieces);
    pieces.index = 29;
    let indices = accumulateIdxForMove(pieces, squaresArr);
    expect(indices.length).toEqual(2);
  });
});
