import foreach from 'lodash.foreach';
import accumulateIdxForMove from './accumulateIdxForMove';
import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';

describe('accumulateIdxForMove Test Suite', () => {
  it('accumulateIdxForMove#success', () => {
    let pieces = createGameBoardPieces();
    let piecesArr = expandGameBoardPieces(pieces);
    piecesArr.idx = 29;
    let idxs = accumulateIdxForMove(piecesArr);
    expect(idxs.length).toEqual(2);
  });
});
