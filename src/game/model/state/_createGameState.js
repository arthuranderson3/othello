import{ GameBoardPieces } from '../GameBoardPieces';

const initGamePieces = new GameBoardPieces();
const initHistory = [ initGamePieces ];

export function createGameState( history = initHistory ) {
    return { history };
}
