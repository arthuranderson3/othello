import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import createGameBoardPieces from '../gameBoardPieces/createGameBoardPieces';
import createGameBoardPiecesArray from '../gameBoardPieces/createGameBoardPiecesArray';
import createGameView from '../gameView/createGameView';

const player2 = constructPlayer( 'yoda', 'B', 'Etc/GMT-0');

export default function constructGame( gameName = 'anonymous', playerName = 'anonymous', numPlayers = 1 ) {
  if( numPlayers === 1 ){
    const gbp = createGameBoardPieces();
    const history = createGameBoardPiecesArray( [ gbp ] );
    return {
      ...constructIdentity(),
      name: gameName,
      startTime: moment.utc().format(),
      players: [ constructPlayer( playerName ), player2 ],
      history: createGameBoardPiecesArray( history ),
      ...createGameView( history )
    };
  }
}
