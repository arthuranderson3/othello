function createPlayer( player ) {
	return { player };
}

export function toOppositePlayer( { player } ) {
    return player === 'W' ? createPlayer('B') : createPlayer('W');
}
