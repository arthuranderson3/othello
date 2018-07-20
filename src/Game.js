import React, { Component } from "react";
import './Game.css';
import Board from './Board';

class Game extends Component {
	constructor( props ) {
		super( props );

		this.state = { history: [ {
			squares: [ null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, 'W', 'B', null, null, null 
								, null, null, null, 'B', 'W', null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								] } ]
			, isWhiteNext: true
			};
	}

	render() {
		const history = this.state.history;
		const status = "Current Player: " + ( this.state.isWhiteNext ? 'W' : 'B' );
		return (
			<div>
			<div className='game-board'>
				<Board squares={history[history.length - 1].squares} onClick={ (i) => this.handleClick(i) }/>
			</div>
			<div className='game-info'>{status}</div>
			</div>
		);
	}

	handleClick( i ) {

		const history = this.state.history;
		const squares = history[ history.length - 1 ].squares.slice();
		const curPlayer = (this.state.isWhiteNext ? 'W': 'B');

		const move = { idx: i, squares: squares, player: curPlayer };
		if( this.isValidMove( move ) ) {
			this.updateSquares( move );
			this.setState( { 
												history: history.concat( {squares: move.squares} )
												, isWhiteNext: !this.state.isWhiteNext 
											}
									);
		}
	}

	toRow( i ) {
		return Math.floor(i / 8);
	}

	toCol( i ) {
		return i % 8;
	}

	toIdx( obj ) {
		if( obj ) { 
			return obj.row * 8 + obj.col;
		}
		return -1;
	}

	toOppositePlayer( player ) {
		return player === 'W' ? 'B' : 'W';
	}

	createRowCol( row, col ) {
		if( row > -1 && row < 8 && col > -1 && col < 8 ) {
			return { row: row, col: col };
		}
		return null;
	}

	toNorth( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow( i ) - 1, 
								this.toCol( i ) ) );
	}

	toNorthWest( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) - 1, 
								this.toCol(i) - 1 ) );
	}

	toNorthEast( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) - 1, 
								this.toCol(i) + 1 ) );
	}

	toWest( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i), 
								this.toCol(i) - 1 ) );
	}

	toEast( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i), 
								this.toCol(i) + 1 ) );
	}

	toSouthWest( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) + 1, 
								this.toCol(i) - 1 ) );
	}

	toSouth( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) + 1, 
								this.toCol(i) ) );
	}

	toSouthEast(i) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) + 1, 
								this.toCol(i) + 1 ) );
	}

	validateDirection( move, direction ) {
		//
		// if the adjacent tile is the opposite player keep going
		//    if this direction also ends with same player return true.
	}

	isValidMove( move ) {
		// we have an open square?
		if( move.squares[move.idx] ) return false;

		// we are adjacent to opposing player with player's square enclosing the line.

		return true;
	}

	updateSquares( move ) {
		move.squares[move.idx] = move.player;
	}

};

export default Game;