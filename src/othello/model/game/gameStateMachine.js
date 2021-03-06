//
// INITIAL IDEAS - not implemented yet.
// to manage 2 player remote game
//
const GameStateMachine = {
  START_GAME: 1,
  WHITE_PLAYER_TURN: 2,
  BLACK_PLAYER_TURN: 3,
  GAME_COMPLETE: 4,
};

const PlayerTurnMachine = {
  BEGIN_TURN: 10,
  EXPLORE_OPTIONS: 15,
  CHOOSE_PLACEMENT: 25,
  END_TURN: 35,
};

const GSM = GameStateMachine;
const PTM = PlayerTurnMachine;

const GameStateTransitions = {
  START_GAME: [GSM.WHITE_PLAYER_TURN],
  WHITE_PLAYER_TURN: [GSM.BLACK_PLAYER_TURN, GSM.WHITE_PLAYER_TURN, GSM.GAME_COMPLETE],
  BLACK_PLAYER_TURN: [GSM.WHITE_PLAYER_TURN, GSM.WHITE_PLAYER_TURN, GSM.GAME_COMPLETE],
  GAME_COMPLETE: [GSM.START_GAME],
};

const PlayerTurnTransitions = {
  BEGIN_TURN: [PTM.EXPLORE_OPTIONS],
  EXPLORE_OPTIONS: [PTM.CHOOSE_PLACEMENT],
  CHOOSE_PLACEMENT: [PTM.END_TURN],
};
