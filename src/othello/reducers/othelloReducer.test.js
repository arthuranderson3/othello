import othelloReducer from './othelloReducer';
import createActionStartGame from '../actions/createActionStartGame';
import createActionMakeMove from '../actions/createActionMakeMove';
import createActionUndoMove from '../actions/createActionUndoMove';
import createActionResetGame from '../actions/createActionResetGame';
import createActionDebugState from '../actions/createActionDebugState';

describe('othelloReducer test suite', () => {
  it('START_GAME success', () => {
    const { name, players, snapshots, view } = othelloReducer(undefined, createActionStartGame());
    expect(name).toEqual('anonymous');
    expect(players.length).toEqual(2);
    expect(snapshots.length).toEqual(1);
    expect(view.score.white).toEqual(2);
    expect(view.score.black).toEqual(2);
    expect(view.currentTurn).toEqual(1);
    expect(view.currentPlayer).toEqual('W');
  });
  it('MAKE_MOVE success', () => {
    const startState = othelloReducer(undefined, createActionStartGame());
    const actionMove = createActionMakeMove(29);
    const nextState = othelloReducer(startState, actionMove);
    //console.log( JSON.stringify(nextState, null, 2) );
    expect(nextState.snapshots.length).toEqual(2);
    expect(nextState.view.score.white).toEqual(4);
    expect(nextState.view.score.black).toEqual(1);
    expect(nextState.view.currentTurn).toEqual(2);
    expect(nextState.view.currentPlayer).toEqual('B');
  });
  it('UNDO_MOVE success', () => {
    const startState = othelloReducer(undefined, createActionStartGame());
    const actionMove = createActionMakeMove(29);
    const nextState = othelloReducer(startState, actionMove);
    const actionUndo = createActionUndoMove();
    const origState = othelloReducer(nextState, actionUndo);
    expect(origState).toEqual(startState);
  });
  it('RESET_GAME success', () => {
    const startState = othelloReducer(undefined, createActionStartGame());
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
    expect(origState.view.currentPlayer).toEqual('W');
  });
  it('DEBUG_STATE success', () => {
    const startState = othelloReducer(undefined, createActionStartGame());
    const actionDebugState = createActionDebugState();
    const nextState = othelloReducer(startState, actionDebugState);
    expect(nextState).toEqual(startState);
  });
});
