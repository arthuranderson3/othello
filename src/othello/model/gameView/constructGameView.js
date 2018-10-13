import computeScore from '../score/computeScore';
import currentSnapshot from '../game/currentSnapshot';
import moment from 'moment';

export default function constructGameView({ players, snapshots }) {
  const currentBoard = currentSnapshot({ snapshots });
  const player = players.find(p => p.color === currentBoard.player);
  return {
    view: {
      ...computeScore(currentBoard),
      currentTurn: snapshots.length,
      currentPlayer: player,
      gameStatus: currentBoard.gameStatus,
      lastTurnTime: moment.utc().format(),
    },
  };
}
