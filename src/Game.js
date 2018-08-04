import React, { Component } from 'react';
import './Game.css';
import GameBoardPieces from "./GameBoardPieces";
import Board from './Board';
import MoveLogic from './MoveLogic';
import GameState from './GameState';

export default class Game extends Component {

	constructor( props ) {
		super( props );

		this.state = new GameState( props );
	}

	render() {
		const gameBoardPieces = this.state.getLastBoard();
		const status = "Current Player: " + gameBoardPieces.player;
		return (
			<div>
			<div className='game-board'>
				<Board squares={gameBoardPieces.squares} onClick={ (i) => this.handle_Click(i) }/>
			</div>
			<div className='game-info'>{status}</div>
			</div>
		);
	}


	handle_Click( i ) {
		const moveLogic = new MoveLogic();
		const self = this;
		moveLogic.checkMove(i, this.state )
		.then( (state) => { self.setState( state ) } )
		.catch( (err) => { console.error( err ); } );
	}

};
