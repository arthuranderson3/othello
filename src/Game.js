import React, { Component } from "react";
import './Game.css';
import Board from './Board';


class Game extends Component {

	constructor( props ) {
		super( props );

		this.state = { history: [ {
			squares: [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
								, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
								, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
								, undefined, undefined, undefined, this.props.W, this.props.B, undefined, undefined, undefined 
								, undefined, undefined, undefined, this.props.B, this.props.W, undefined, undefined, undefined 
								, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
								, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
								, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
								] } ]
			, isWhiteNext: true
			};
	}

	render() {
		const history = this.state.history;
		const status = "Current Player: " + this.get_CurrentPlayer();
		return (
			<div>
			<div className='game-board'>
				<Board squares={history[history.length - 1].squares} onClick={ (i) => this.handleClick(i) }/>
			</div>
			<div className='game-info'>{status}</div>
			</div>
		);
	}

	get_CurrentPlayer() {
		return ( this.state.isWhiteNext ? this.props.W : this.props.B );
	}

	handleClick( i ) {

		const history = this.state.history;
		const squares = history[ history.length - 1 ].squares.slice();
		const curPlayer = this.get_CurrentPlayer();

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
		return Math.floor(i / this.props.MAX_HEIGHT);
	}

	toCol( i ) {
		return i % this.props.MAX_WIDTH;
	}

	toIdx( obj ) {
		if( obj ) { 
			return obj.row * this.props.MAX_HEIGHT + obj.col;
		}
		return -1;
	}

	toOppositePlayer( player ) {
		return player === this.props.W ? this.props.B : this.props.W;
	}

	createRowCol( row, col ) {
		if( row > -1 && row < this.props.MAX_HEIGHT && col > -1 && col < this.props.MAX_HEIGHT ) {
			return { row: row, col: col };
		}
		return undefined;
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

Game.defaultProps = {
	B: 'B'
	, W: 'W'
	, BOARD_WIDTH: 8
	, BOARD_HEIGHT: 8
};

export default Game;