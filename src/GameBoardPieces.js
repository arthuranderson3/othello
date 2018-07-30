import React from 'react';

export default class GameBoardPieces {
	constructor( props ) {
		this.squares = props.squares.slice();
		this.player = props.player;
		this.currentMoveChoice = props.currentMoveChoice;
		this.toOppositePlayer = this.toOppositePlayer.bind(this);
	}

	static initialBoard() {
		return [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
					, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
					, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
					, undefined, undefined, undefined,       'W',       'B', undefined, undefined, undefined 
					, undefined, undefined, undefined,       'B',       'W', undefined, undefined, undefined 
					, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
					, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
					, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
					];
	}

/*************************************************************
*
* from player W into B and visa versa
*
*************************************************************/
	toOppositePlayer( player ) {
		return player === 'W' ? 'B' : 'W';
	}

	getPlayer() {
		return this.player;
	}

}