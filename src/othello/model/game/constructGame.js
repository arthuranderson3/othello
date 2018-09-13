import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import constructGameBoard from '../gameBoard/constructGameBoard';
import copyGameBoardArray from '../gameBoard/copyGameBoardArray';
import constructGameView from '../gameView/constructGameView';

const player2 = constructPlayer( 'black', 'B', 'Etc/GMT-0');

export default function constructGame( gameName = 'anonymous', playerName = 'white', numPlayers = 1 ) {
  if( numPlayers === 1 ){
    const gbp = constructGameBoard();
    const snapshots = copyGameBoardArray( [ gbp ] );
    return {
      ...constructIdentity(),
      name: gameName,
      startTime: moment.utc().format(),
      players: [ constructPlayer( playerName, 'W' ), player2 ],
      snapshots,
      ...constructGameView( snapshots )
    };
  }
}
