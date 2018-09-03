import { createGameBoardPieces } from '../../model/gameBoardPieces';
import { toSquaresArray } from '../../model/gameBoardPieces';
import hasMove from './hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove', () => {
    const pieces = createGameBoardPieces();
    const squaresArr = toSquaresArray(pieces.squaresObj);
    expect(hasMove( squaresArr, 'W')).toBe(true);
  });

  it('hasMove', () => {
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
      idx: 19,
      turn: 5,
    };
    const squaresArr = toSquaresArray(pieces.squaresObj);
    expect(hasMove( squaresArr, 'W')).toBeTruthy();
    expect(hasMove( squaresArr, 'B')).toBeTruthy();
  });
});
