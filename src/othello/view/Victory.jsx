import React from 'react';
import find from 'lodash/find';

const Victory = ({ winner }) => (
  <React.Fragment>
    <h6>
      {winner.name} Wins!
      <br />
    </h6>
  </React.Fragment>
);

export function createVictory({ players, view }) {
  const { score } = view;
  let winner = { name: 'TIE GAME' };
  if (score.white > score.black) {
    winner = find(players, player => player.color === 'W');
  } else {
    winner = find(players, player => player.color === 'B');
  }
  return { winner };
}

export default Victory;
