import createGameBoardPieces from '../../model/gameBoardPieces/createGameBoardPieces';
import expandGameBoardPieces from '../../model/gameBoardPieces/expandGameBoardPieces';
import hasMove from './hasMove';

describe('hasMove Test Suite', () => {
  it('hasMove', () => {
    const pieces = createGameBoardPieces();
    const ep = expandGameBoardPieces(pieces);
    expect(hasMove(ep, 'W')).toBe(true);
  });

  it('hasMove', () => {
    const pieces = {
      squares_obj: {
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
    const ep = expandGameBoardPieces(pieces);
    expect(hasMove(ep, 'W')).toBeTruthy();
    expect(hasMove(ep, 'B')).toBeTruthy();
  });
});
