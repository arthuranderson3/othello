import othelloReducer from './othelloReducer';
import constructPlayer from '../model/player/constructPlayer';
import createActionStartGame from '../actions/createActionStartGame';
import createActionMakeMove from '../actions/createActionMakeMove';
import createActionUndoMove from '../actions/createActionUndoMove';
import createActionResetGame from '../actions/createActionResetGame';
import createActionDebugState from '../actions/createActionDebugState';

describe('othelloReducer test suite', () => {
  let playerOne;
  let playerTwo;
  beforeAll(() => {
    playerOne = constructPlayer('gabe', 'W', 'human');
    playerTwo = constructPlayer('justin', 'B', 'human');
  });
  describe('START_GAME success', () => {
    let gameStartState;
    beforeAll(() => {
      gameStartState = othelloReducer(
        undefined,
        createActionStartGame('anonymous', playerOne, playerTwo)
      );
    });
    it('name', () => {
      const { name } = gameStartState;
      expect(name).toEqual('anonymous');
    });
    it('players', () => {
      const { players } = gameStartState;
      expect(players.length).toEqual(2);
    });
    it('snapshots', () => {
      const { snapshots } = gameStartState;
      expect(snapshots.length).toEqual(1);
    });
    it('view.score.white', () => {
      const { view } = gameStartState;
      expect(view.score.white).toEqual(2);
    });
    it('view.score.black', () => {
      const { view } = gameStartState;
      expect(view.score.black).toEqual(2);
    });
    it('view.currentTurn', () => {
      const { view } = gameStartState;
      expect(view.currentTurn).toEqual(1);
    });
    it('view.currentTurn', () => {
      const { view } = gameStartState;
      expect(view.currentPlayer).toEqual(playerOne);
    });
  });
  describe('MAKE_MOVE success', () => {
    let nextState;
    beforeAll(() => {
      const startState = othelloReducer(
        undefined,
        createActionStartGame('anonymous', playerOne, playerTwo)
      );
      const actionMove = createActionMakeMove(29);
      nextState = othelloReducer(startState, actionMove);
    });
    it('nextState.spapshots.length=2', () => {
      expect(nextState.snapshots.length).toEqual(2);
    });
    it('nextState.view.score.white=4', () => {
      expect(nextState.view.score.white).toEqual(4);
    });
    it('nextState.view.score.black=1', () => {
      expect(nextState.view.score.black).toEqual(1);
    });

    it('nextState.view.currentTurn=2', () => {
      expect(nextState.view.currentTurn).toEqual(2);
    });
    it('nextState.view.currentPlayer=B', () => {
      expect(nextState.view.currentPlayer).toEqual(playerTwo);
    });
  });
  it('UNDO_MOVE success', () => {
    const startState = othelloReducer(
      undefined,
      createActionStartGame('anonymous', playerOne, playerTwo)
    );
    const actionMove = createActionMakeMove(29);
    const nextState = othelloReducer(startState, actionMove);
    const actionMove2 = createActionMakeMove(19);
    const nextNextState = othelloReducer(nextState, actionMove2);
    const actionUndo = createActionUndoMove();
    const origState = othelloReducer(nextNextState, actionUndo);
    expect(origState).toEqual(startState);
  });
  it('RESET_GAME success', () => {
    const startState = othelloReducer(
      undefined,
      createActionStartGame('anonymous', playerOne, playerTwo)
    );
    const actionMove = createActionMakeMove(29);
    const nextState = othelloReducer(startState, actionMove);
    const actionReset = createActionResetGame();
    const origState = othelloReducer(nextState, actionReset);
    expect(origState.name).toEqual(startState.name);
    expect(origState.players.length).toEqual(2);
    expect(origState.snapshots.length).toEqual(1);
    expect(origState.view.score.white).toEqual(2);
    expect(origState.view.score.black).toEqual(2);
    expect(origState.view.currentTurn).toEqual(1);
    expect(origState.view.currentPlayer).toEqual(playerOne);
  });
  it('DEBUG_STATE success', () => {
    const startState = othelloReducer(
      undefined,
      createActionStartGame('anonymous', playerOne, playerTwo)
    );
    const actionDebugState = createActionDebugState();
    const nextState = othelloReducer(startState, actionDebugState);
    expect(nextState).toEqual(startState);
  });
});
