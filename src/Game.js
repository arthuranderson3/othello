import React, { Component } from 'react';
import './Game.css';
import GameBoardPieces from "./GameBoardPieces";
import Board from './Board';
import MoveLogic from './MoveLogic';
import GameState from './GameState';

class Game extends Component {

	constructor( props ) {
		super( props );

		this.state = new GameState( props );
		this.checkMove = this.checkMove.bind(this);
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
		this.checkMove(i);
	}

	checkMove( idx ) {
		const gameBoardPieces = this.state.getLastBoard();
		gameBoardPieces.idx = idx;

		const moveLogic = new MoveLogic();
		if( ! moveLogic.hasMove( gameBoardPieces ) ) {
			return;
		}
		if( moveLogic.isValidMove( gameBoardPieces ) ) {
			const updatedSquares = moveLogic.updateSquares( gameBoardPieces );

			this.setState( { history: history.concat( {squares: updatedSquares} )
												, isWhiteNext: !this.state.isWhiteNext } );
		}
	}

};

export default Game;