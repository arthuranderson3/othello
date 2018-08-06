import React, { Component } from 'react';
import GameBoard from './view/GameBoard';
import GameStats from './view/GameStats';
import MoveLogic from './controller/MoveLogic';
import GameState from './model/GameState';

export default class Game extends Component {

	constructor( props ) {
		super( props );

		this.state = new GameState( props );
	}

	render() {
		const gameBoardPieces = this.state.getLastBoard();
		return (
			<div class='row'>
				<div className='col-4'>
					<GameBoard 
						className='d-flex flex-content-center shadow' 
						squares={gameBoardPieces.squares} 
						onClick={ (i) => this.click_Square(i) }/>
				</div>
				<div className='col-4'>
					<GameStats 
						squares={gameBoardPieces.squares} 
						player={gameBoardPieces.player} 
						turn={this.state.getTurn()} />
				</div>
			</div>
		);
	}


	click_Square( i ) {
		const moveLogic = new MoveLogic();
		const self = this;
		moveLogic.checkMove(i, this.state )
		.then( (state) => { self.setState( state ) } )
		.catch( (err) => { console.error( err ); } );
	}

};
