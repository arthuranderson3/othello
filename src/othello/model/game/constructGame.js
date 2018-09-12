import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import createGameBoard from '../gameBoard/createGameBoard';
import createGameBoardArray from '../gameBoard/createGameBoardArray';
import createGameView from '../gameView/createGameView';

const player2 = constructPlayer( 'black', 'B', 'Etc/GMT-0');

export default function constructGame( gameName = 'anonymous', playerName = 'white', numPlayers = 1 ) {
  if( numPlayers === 1 ){
    const gbp = createGameBoard();
    const history = createGameBoardArray( [ gbp ] );
    return {
      ...constructIdentity(),
      name: gameName,
      startTime: moment.utc().format(),
      players: [ constructPlayer( playerName, 'W' ), player2 ],
      history: createGameBoardArray( history ),
      ...createGameView( history )
    };
  }
}
