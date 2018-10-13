import copyIdentity from '../identity/copyIdentity';
import copyPlayerArray from '../player/copyPlayerArray';
import copyGameBoardArray from '../gameBoard/copyGameBoardArray';
import constructGameView from '../gameView/constructGameView';

export default function copyGame({ id, name, startTime, players, snapshots }) {
  return {
    ...copyIdentity({ id }),
    name,
    startTime,
    players: copyPlayerArray(players),
    snapshots: copyGameBoardArray(snapshots),
    ...constructGameView({ name, players, snapshots }),
  };
}
