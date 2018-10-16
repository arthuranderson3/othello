import React from 'react';
import golumVictory from './gollumVictory.gif';
import humanVictory from './humanVictory.gif';
import randyVictory from './randyRandomDance.gif';
import smellOfVictory from './smellOfVictory.gif';
import find from 'lodash/find';

const Victory = ({ winner, victoryImg }) => (
  <React.Fragment>
    <h6>
      {winner.name} Wins!
      <br />
    </h6>
    <img src={victoryImg} class="img-thumbnail" />
  </React.Fragment>
);

export function createVictory({ players, view }) {
  console.info(JSON.stringify({ players, view }, null, 2));

  const { score } = view;
  let winner = { name: 'TIE GAME' };
  let victoryImg = undefined;
  if (score.white > score.black) {
    winner = find(players, player => player.color === 'W');
  } else {
    winner = find(players, player => player.color === 'B');
  }
  if (winner.type === 'human') {
    victoryImg = humanVictory;
  }
  if (winner.type === 'computer') {
    switch (winner.name) {
      case 'Randy': {
        victoryImg = randyVictory;
        break;
      }
      case 'Gollum': {
        victoryImg = golumVictory;
        break;
      }
      default: {
        victoryImg = smellOfVictory;
        break;
      }
    }
  }
  return { winner, victoryImg };
}

export default Victory;
