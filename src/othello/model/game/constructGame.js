import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';
import createGameBoardPiecesArray from '../gameBoardPieces/createGameBoardPiecesArray';

const player2 = constructPlayer( 'yoda', 'B', 'Etc/GMT-0');

export default function constructGame( gameName = 'anonymous', playerName = 'anonymous', numPlayers = 1 ) {
  if( numPlayers === 1 ){
    let player1 = constructPlayer(playerName);
    return {
      ...constructIdentity(),
      name: gameName,
      startTime: moment.utc().format(),
      players: [ player1, player2 ],
      history: createGameBoardPiecesArray( [ createGameBoardPieces() ]),
      gameView: {
        score: { white: 2, black: 2 },
        currentTurn: 1,
        currentPlayer: 'W',
        lastTurnTime: undefined
      }
    };
  }
}
