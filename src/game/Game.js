import React, { Component } from 'react';
import GameBoard from './view/GameBoard';
import GameStats from './view/GameStats';
import { checkMove } from './controller/moveLogic';
import { GameState } from './model';

export default class Game extends Component {

    constructor( props ) {
        super( props );

        this.state = new GameState( props );
    }

    render() {
        const gameBoardPieces = this.state.getLastBoard();
        return (
            <div className='row'>
                <div className='col-4'>
                    <GameBoard 
                        className='d-flex flex-content-center shadow' 
                        squares={gameBoardPieces.squares} 
                        player={gameBoardPieces.player}
                        turn={this.state.getTurn()}
                        onClick={ (i) => this.click_Square(i) }/>
                </div>
            </div>
        );
    }


    click_Square( i ) {
        const self = this;
        checkMove(i, self.state )
        .then( (state) => { self.setState( state ); } )
        .catch( (err) => { console.error( err ); } );
}

}
