import React from 'react';
import _ from 'lodash';
import BoardNavigation from './BoardNavigation';

export default class MoveLogic {

    constructor( ) {

        _.bindAll(this, ['checkMove'
            , 'hasMove'
            , 'isValidMove'
            , 'validateDirection'
            , 'updateSquares'
            , 'findMovesInDirection'
            , 'toOppositePlayer']);
    }

    checkMove( idx, state ) {
        return new Promise( ( resolve, reject ) => {
            const currentState = state;
            const gameBoardPieces = currentState.getLastBoard();
            gameBoardPieces.idx = idx;

            const moveLogic = new MoveLogic();
            if( !moveLogic.hasMove( gameBoardPieces ) ) {
                return reject( new Error('not valid move') );

            } else if ( moveLogic.isValidMove( gameBoardPieces ) ) {

                moveLogic.updateSquares( gameBoardPieces );
                // see if the next player has a move.
                const next_player = moveLogic.toOppositePlayer( gameBoardPieces.player );
                gameBoardPieces.player = next_player;
                if( moveLogic.hasMove( gameBoardPieces ) ){
                    currentState.recordLastBoard( gameBoardPieces );
                } else {
                    gameBoardPieces.player = moveLogic.toOppositePlayer( gameBoardPieces.player);
                    currentState.recordLastBoard( gameBoardPieces );
                }

                return resolve( currentState );
            } 
        });
    }

    hasMove( pieces ) {
        // gather all potential movement squares.
        const board_map = _.map( pieces.squares, ( val, idx ) => { return { idx: idx, square: val }; } );
        const potential_moves = _.filter( board_map, ( board_piece ) => { return _.isUndefined(board_piece.square); } );
        return _.some( potential_moves, ( obj ) => { 
            return this.isValidMove( { idx: obj.idx, squares: pieces.squares, player: pieces.player }); } );
    }

    /*************************************************************
*
* check the board against the current choice of move to see if
* it is a valid move or not
* REF: can refactor this into seperate async checks and join at end
*
*************************************************************/
    isValidMove( pieces ) {
        // we have an open square?
        if( _.isUndefined( pieces.squares[pieces.idx] ) ){

            const bn = new BoardNavigation();
            let validMove = false;
            //
            // we are adjacent to opposing player with player's square enclosing the line.
            // Keep track of validMove to speed up whether or not this is a valid move.
            //
            if( this.validateDirection( bn.top, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.topRight, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.topLeft, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.right, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.left, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.bottom, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.bottomRight, pieces ) ) {
                validMove = true;
            }
            if( !validMove && this.validateDirection( bn.bottomLeft, pieces ) ) {
                validMove = true;
            }

            return validMove;
        } else {
            return false;
        }

    }

    /*************************************************************
*
* Check each direction, same logic, walk the path if at first
* an opposing piece is adjacent, then stop and succeed if it ends
* the same piece.
*
*************************************************************/

    validateDirection( direction, pieces ) {
        /*
		* if the adjacent tile is the opposite player keep going
		*    if this direction also ends with same player return true.
		*/
        let next_idx = direction( pieces.idx );
        const opp_player = this.toOppositePlayer( pieces.player );
        let adjacent_is_opposite = false;
        do{ 
            if( next_idx > -1 ) {
				
                let adj_player = pieces.squares[next_idx];

                /* 
				* are we next to or ending with an undefined square? 
				*/
                if( _.isUndefined(adj_player) ) {
                    return false;
                }
				
                /* 
				* are we adjacent to the same piece we are? 
				*/
                if( !adjacent_is_opposite && adj_player === pieces.player ) {
                    return false;
                }

                /*
				*  are we adjacent to the opposing player
				*/
                if( adj_player === opp_player ) {
                    adjacent_is_opposite = true;
                    /*
					* now iterate this direction and return false if no same player
					*/
                    next_idx = direction( next_idx);
                } else if( adjacent_is_opposite && pieces.player === adj_player ) {
                    return true;
                } 
            }
        } while( next_idx > -1 && next_idx < 64 );

    }

    /*************************************************************
*
* Create a list of all the squares that need to be updated
* then update them all at the end.
*
*************************************************************/
    updateSquares( pieces ) {
        let movement = [ pieces.idx ];
        const bn = new BoardNavigation();
        //
        // accumulate all the board squares that will turn
        //
        movement = _.concat( movement, this.findMovesInDirection( bn.top, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.topRight, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.topLeft, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.right, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.bottom, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.bottomRight, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.bottomLeft, pieces ) );
        movement = _.concat( movement, this.findMovesInDirection( bn.left, pieces ) );

        _.each( movement, ( i ) => {
            pieces.squares[i] = pieces.player;
        });
    }

    findMovesInDirection( direction, pieces ) {
        /*
		* if the adjacent tile is the opposite player keep going
		*    if this direction also ends with same player return true.
		*/
        let potentialMoves = [];
        let next_idx = direction( pieces.idx );
        const opp_player = this.toOppositePlayer( pieces.player );
        let adjacent_is_opposite = false;
        do{ 
            if( next_idx > -1 ) {
				
                let adj_player = pieces.squares[next_idx];

                /* 
				* are we next to or ending with an undefined square? 
				*/
                if( _.isUndefined(adj_player) ) {
                    return [];
                }
				
                /* 
				* are we adjacent to the same piece we are? 
				*/
                if( !adjacent_is_opposite && adj_player === pieces.player ) {
                    return [];
                }

                /*
				*  are we adjacent to the opposing player
				*/
                if( adj_player === opp_player ) {
                    adjacent_is_opposite = true;
                    potentialMoves.push( next_idx );
                    /*
					* now iterate this direction and return false if no same player
					*/
                    next_idx = direction( next_idx);
                } else if( adjacent_is_opposite && pieces.player === adj_player ) {
                    return potentialMoves.slice();
                } 
            }
        } while( next_idx > -1 && next_idx < 64 );

    }

    toOppositePlayer( player ) {
        return player === 'W' ? 'B' : 'W';
    }
}
