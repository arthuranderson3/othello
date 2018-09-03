import createGameBoardPiecesArray from './createGameBoardPiecesArray';
import createGameBoardPieces from './createGameBoardPieces';

describe('createGameBoardPiecesArray suite', () => {
  it('#createGameBoardPiecesArray default ', () => {
		const gbp = [ createGameBoardPieces() ];
    const pieces = createGameBoardPiecesArray( gbp);
    expect(pieces.length).toEqual(1);
		expect(pieces).toEqual(gbp);
  });
});
