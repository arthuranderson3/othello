import React, { Component } from 'react';
import GameBoard from './view/GameBoard';
import { checkMove } from './controller/moveLogic';
import { GameState } from './model';
import { getLastBoard } from './model/state/';
import { getTurn, countSquareColor } from './model/stats';

export default class Game extends Component {

    constructor( props ) {
        super( props );

        this.state = new GameState();
    }

    render() {
        const gameBoardPieces = getLastBoard( this.state );
        const whiteCount = countSquareColor( 'W', gameBoardPieces );
        const blackCount = countSquareColor( 'B', gameBoardPieces );
        const currentTurns = getTurn( this.state );
        return (
            <div className='row'>
              <div className='col-4'>
                <GameBoard
                  className='d-flex flex-content-center shadow'
                  squares={ gameBoardPieces.squares }
                  player={ gameBoardPieces.player }
                  turn={ currentTurns }
                  whiteCount={ whiteCount }
                  blackCount={ blackCount }
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
