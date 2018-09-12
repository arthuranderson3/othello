import { createGameBoard } from '../../model/gameBoard';
import { toSquaresArray } from '../../model/gameBoard';
import hasMove from './hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove# true', () => {
    const pieces = createGameBoard();
    const squaresArr = toSquaresArray(pieces);
    expect(hasMove( 'W', squaresArr )).toBe(true);
  });

  it('hasMove# both', () => {
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
    const squaresArr = toSquaresArray(pieces);
    expect(hasMove( 'W', squaresArr)).toBeTruthy();
    expect(hasMove( 'B', squaresArr)).toBeTruthy();
  });
});
