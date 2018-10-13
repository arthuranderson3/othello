import recordSnapshot from './recordSnapshot';
import constructGame from './constructGame';
import constructGameBoard from '../gameBoard/constructGameBoard';

describe('recordSnapshot test suite', () => {
  it('recordSnapshot#success', () => {
    const state = constructGame();
    const newGbp = constructGameBoard();
    const nextState = recordSnapshot(state, newGbp);
    expect(nextState.snapshots.length).toEqual(2);
    expect(nextState.snapshots[0]).toEqual(state.snapshots[0]);
    expect(nextState.snapshots[1]).toEqual(newGbp);
  });
});
