import React from 'react';

export default class GameState {

	constructor( props ) {
		this.history = props.history.slice();
		this.isWhiteNext = props.isWhiteNext;
	}
	
}