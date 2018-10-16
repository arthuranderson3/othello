import React from 'react';
import golumVictory from './gollumVictory.gif';
import humanVictory from './humanVictory.gif';
import randyVictory from './randyRandomDance.gif';
import smellOfVictory from './smellOfVictory.gif';
import find from 'lodash/find';

const Victory = ({ winner, victoryImg, imgAltText }) => (
  <React.Fragment>
    <h6>
      {winner.name} Wins!
      <br />
    </h6>
    <img src={victoryImg} class="img-thumbnail" alt={imgAltText} />
  </React.Fragment>
);

export function createVictory({ players, view }) {
  const { score } = view;
  let winner = { name: 'TIE GAME' };
  let victoryImg = undefined;
  let imgAltText = 'victory';
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
  return { winner, victoryImg, imgAltText };
}

export default Victory;
