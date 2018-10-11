import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import constructGameBoard from '../gameBoard/constructGameBoard';
import copyGameBoardArray from '../gameBoard/copyGameBoardArray';
import constructGameView from '../gameView/constructGameView';
import gameStati from './gameStati';

export default function constructGame(
  gameName = 'anonymous',
  playerName = 'white',
  numPlayers = 1
) {
  let players;
  const num = parseInt(numPlayers, 10);
  if (num === 1) {
    players = [constructPlayer(playerName, 'W'), constructPlayer('black', 'B', 'Etc/GMT-0')];
  } else {
    players = [constructPlayer(playerName, 'W')];
  }
  const snapshots = copyGameBoardArray([constructGameBoard()]);
  return {
    ...constructIdentity(),
    name: gameName,
    startTime: moment.utc().format(),
    gameStatus: gameStati.WHITE_TURN,
    players,
    snapshots,
    ...constructGameView(snapshots),
  };
}
