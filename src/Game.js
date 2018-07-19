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

	handleClick( i ) {
		console.info( 'HandleClick():' + i);

		const history = this.state.history;
		const squares = history[ history.length - 1 ].squares.slice();

		if( squares[i] ) { return; }
		const curPlayer = (this.state.isWhiteNext ? 'W': 'B');
		squares[i] = curPlayer;
		this.setState( { 
											history: history.concat( {squares: squares} )
											, isWhiteNext: !this.state.isWhiteNext 
										});
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
};

export default Game;