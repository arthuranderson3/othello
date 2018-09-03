import foreach from 'lodash.foreach';
import accumulateIdxForMove from './accumulateIdxForMove';
import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import toSquaresArray from '../../model/gameBoardPieces/toSquaresArray';

describe('accumulateIdxForMove Test Suite', () => {
  it('accumulateIdxForMove#success', () => {
    let pieces = createGameBoardPieces();
    let squaresArr = toSquaresArray(pieces.squaresObj);
    pieces.idx = 29;
    let idxs = accumulateIdxForMove(pieces, squaresArr);
    expect(idxs.length).toEqual(2);
  });
});
