import moment from 'moment';
import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';
import constructRandy from '../player/constructRandy';
import constructGollum from '../player/constructGollum';
import copyPlayer from '../player/copyPlayer';
import constructGameBoard from '../gameBoard/constructGameBoard';
import copyGameBoardArray from '../gameBoard/copyGameBoardArray';
import constructGameView from '../gameView/constructGameView';
import gameStati from '../gameBoard/gameStati';

const playerOneDefault = constructPlayer('white', 'W', 'human');
const playerTwoDefault = constructRandy();

export default function constructGame(
  gameName = 'anonymous',
  playerOne = playerOneDefault,
  playerTwo = playerTwoDefault,
  gameStatus = gameStati.GAME_START
) {
  let players;
  players = [copyPlayer(playerOne), copyPlayer(playerTwo)];
  const snapshots = copyGameBoardArray([constructGameBoard(gameStatus)]);
  return {
    ...constructIdentity(),
    name: gameName,
    startTime: moment.utc().format(),
    players,
    snapshots,
    ...constructGameView(snapshots),
  };
}
