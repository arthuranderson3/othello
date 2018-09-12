import gatherValidMoves from './gatherValidMoves';
import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import toSquaresArray from '../../model/gameBoardPieces/toSquaresArray';

describe('gatherValidMoves Test Suite', () => {
  it('gatherValidMoves# true', () => {
    const pieces = createGameBoardPieces();
    const squaresArr = toSquaresArray(pieces);
		const vm = gatherValidMoves( squaresArr, 'W');
    expect(vm).toEqual([20, 29, 34, 43]);
  });

  it('gatherValidMoves# both', () => {
    const pieces = {
      squaresObj: {
        '19': 'B',
        '20': 'B',
        '21': 'B',
        '27': 'B',
        '28': 'W',
        '29': 'W',
        '35': 'B',
        '36': 'W',
      },
      player: 'W',
      index: 19,
      turn: 5,
    };
    const squaresArr = toSquaresArray(pieces);
    expect(gatherValidMoves( squaresArr, 'W')).toEqual([10, 11, 12, 13, 14, 18, 26, 34, 42]);
    expect(gatherValidMoves( squaresArr, 'B')).toEqual([ 30, 37, 38, 44, 45 ]);
  });
});
