// const TURN_SQUARES = "TURN_SQUARES";
// const UNDO_MOVE = "UNDO_MOVE";
// const RESET_BOARD = "RESET_BOARD";
// const GET_ALL_VALID_MOVE_SQUARES = "GET_ALL_VALID_MOVE_SQUARES";
// const GET_ALL_TURNING_SQUARES = "GET_ALL_TURNING_SQUARES";
// const DETERMINE_NEXT_PLAYER = "DETERMIN_NEXT_PLAYER";
// const DECLARE_VICTOR = "DECLARE_VICTOR";
// const DECLARE_TIE = "DECLARE_TIE";
//
// const startOnePlayerPayload = {
// 	id: 'uuid',
// 	startTime: "dateTime",
//  players: [ { id:'uuid', name: 'anonymous', color: 'W' }, { id:'uuid', name: 'anonymous', color: 'B'}]
// 	lastMovementTime: "dateTime",
// 	turns:[ {
// 		count: 1,
// 		gameBoard: { "27":"B", "28":"W", "35":"W", "36":"B" },
// 		lastMove: "idx",
// 		playerColor: "W",
// 		validSquares: [26,19,37,44],
// 		potentialSquares: { "26":[27], "19":[27], "37":[36], "44":[36] },
// 		movementTime: "dateTime"
// 	} ]
// };
//
// function createStartOnePlayerGame( type = START_ONE_PLAYER_GAME, payload = startOnePlayerPayload ) {
// 	return { type, payload }
// }
//
// function createTurnSquares( type = TURN_SQUARES, payload ) {
// 	return {
// 		type,
// 		payload: {
// 			movementTime: "dateTime",
// 			placement: 27,
// 			board: { '27':'B' '28':'W' },
// 			playerColor: 'B'
// 		}
// 	}
// }
