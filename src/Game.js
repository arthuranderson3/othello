import React, { Component } from 'react';
import './Game.css';
import GameBoardPieces from "./GameBoardPieces";
import Board from './Board';
import MoveLogic from './MoveLogic';


class Game extends Component {

	constructor( props ) {
		super( props );

		this.state = { history: [ {
			squares: GameBoardPieces.initialBoard() } ]
			, isWhiteNext: true
			};
	}

	render() {
		const history = this.state.history;
		const status = "Current Player: " + this.get_CurrentPlayer();
		console.info( status );
		return (
			<div>
			<div className='game-board'>
				<Board squares={history[history.length - 1].squares} onClick={ (i) => this.handle_Click(i) }/>
			</div>
			<div className='game-info'>{status}</div>
			</div>
		);
	}

	get_CurrentPlayer() {
		return ( this.state.isWhiteNext ? 'W' : 'B' );
	}

	handle_Click( i ) {

		const history = this.state.history;
		const props = {
			idx: i,
			squares: history[ history.length - 1].squares.slice(),
			player: this.get_CurrentPlayer()
		}
		console.info( props );

		const moveLogic = new MoveLogic();
		if( ! moveLogic.hasMove( props ) ) {
			return;
		}
		if( moveLogic.isValidMove( props ) ) {
			const updatedSquares = moveLogic.updateSquares( props );

			console.info( updatedSquares );
			
			this.setState( { history: history.concat( {squares: updatedSquares} )
												, isWhiteNext: !this.state.isWhiteNext } );
		}
	}

};

export default Game;