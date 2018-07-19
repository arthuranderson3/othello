import React, { Component } from "react";
import './Game.css';
import Board from './Board';

class Game extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			squares: [ null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, 'W', 'B', null, null, null 
								, null, null, null, 'B', 'W', null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								, null, null, null, null, null, null, null, null 
								]


			, isWhiteNext: true
			};
	}
	render() {
		return (
			<div class='game-board'>
				<Board squares={this.state.squares} />
			</div>
		);
	}
};

export default Game;