import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';
import createGameBoardPiecesArray from '../gameBoardPieces/createGameBoardPiecesArray';
import computeScore from '../score/computeScore';

const player2 = constructPlayer( 'yoda', 'B', 'Etc/GMT-0');

export default function constructGame( gameName = 'anonymous', playerName = 'anonymous', numPlayers = 1 ) {
  if( numPlayers === 1 ){
    const gbp = createGameBoardPieces();
    return {
      ...constructIdentity(),
      name: gameName,
      startTime: moment.utc().format(),
      players: [ constructPlayer( playerName ), player2 ],
      history: createGameBoardPiecesArray( [ gbp ]),
      view: {
        ... computeScore( gbp ),
        currentTurn: 1,
        currentPlayer: 'W',
        lastTurnTime: moment.utc().format()
      }
    };
  }
}
