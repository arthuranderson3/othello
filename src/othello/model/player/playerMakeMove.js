import currentSnapshot from '../game/currentSnapshot';
import randomInt from '../../utility/randomInt';
import foreach from 'lodash/forEach';
import maxby from 'lodash/maxBy';
import accumulateIdxForMove from '../../controller/moveLogic/accumulateIdxForMove';
import toSquaresArray from '../gameBoard/toSquaresArray';

function randomMove(state, onMakeMoveCallback) {
  return function() {
    const snapshot = currentSnapshot(state);
    if (snapshot.validSquares.length > 0) {
      const idx = randomInt(0, snapshot.validSquares.length - 1);
      onMakeMoveCallback(snapshot.validSquares[idx]);
    }
  };
}

function gollumMove(state, onMakeMoveCallback) {
  return function() {
    const snapshot = currentSnapshot(state);
    if (snapshot.validSquares.length > 0) {
      // idx, count
      let squaresArr = toSquaresArray(snapshot.squaresObj);
      let choices = [];
      foreach(snapshot.validSquares, idx => {
        const futureSnapshot = { ...snapshot, idx };
        const movements = accumulateIdxForMove(futureSnapshot, squaresArr);
        choices.push({
          idx,
          score: movements.length,
        });
      });
      const choice = maxby(choices, 'score');
      onMakeMoveCallback(choice.idx);
    }
  };
}

export default function playerMakeMove(state, makeMoveCallback) {
  let { currentPlayer } = state.view;
  const player = currentPlayer;
  if (player.type === 'computer') {
    let selectMove = randomMove;

    if (player.name === 'Randy') {
      selectMove = randomMove;
    }
    if (player.name === 'Gollum') {
      selectMove = gollumMove;
    }

    setTimeout(selectMove(state, makeMoveCallback), player.delay * 1000);
  }
}
