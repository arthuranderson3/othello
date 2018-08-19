function createPlayer(player) {
  return { player };
}

export default function toOppositePlayer({ player }) {
  return player === 'W' ? createPlayer('B') : createPlayer('W');
}
