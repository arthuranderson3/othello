function buildPlayer(player) {
  return { player };
}

export default function toOppositePlayer({ player }) {
  return player === 'W' ? buildPlayer('B') : buildPlayer('W');
}
