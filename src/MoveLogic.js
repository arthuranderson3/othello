import React from 'react';
import _ from 'lodash';
import BoardNavigation from './BoardNavigation';

class MoveLogic {

	constructor( ) {

/*************************************************************
*
* interesting thing - we need to bind / create the functions
* in this class in order to use them from button clicks.
*
*************************************************************/
		this.hasMove = this.hasMove.bind(this);
		this.isValidMove = this.isValidMove.bind(this);
		this.validateDirection = this.validateDirection.bind(this);
		this.updateSquares = this.updateSquares.bind(this);
		this.findMovesInDirection = this.findMovesInDirection.bind(this);
		this.toOppositePlayer = this.toOppositePlayer.bind(this);

	}

	hasMove( props ) {
		// gather all potential movement squares.
		const board_map = _.map( props.squares, ( val, idx ) => { return { idx: idx, square: val }; } );
		const potential_moves = _.filter( board_map, ( board_piece ) => { return _.isUndefined(board_piece.square); } );
		console.info( { potential_moves: potential_moves } );
		return _.some( potential_moves, ( obj ) => { 
			return this.isValidMove( { idx: obj.idx, squares: props.squares, player: props.player }); } );
	}

/*************************************************************
*
* check the board against the current choice of move to see if
* it is a valid move or not
* REF: can refactor this into seperate async checks and join at end
*
*************************************************************/
	isValidMove( props ) {
		// we have an open square?
		if( props.squares[props.idx] ) return false;
		const bn = new BoardNavigation();
		let validMove = false;
		//
		// we are adjacent to opposing player with player's square enclosing the line.
		// Keep track of validMove to speed up whether or not this is a valid move.
		//
		if( this.validateDirection( bn.top, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.topRight, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.topLeft, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.right, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.left, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.bottom, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.bottomRight, props ) ) {
			validMove = true;
		}
		if( !validMove && this.validateDirection( bn.bottomLeft, props ) ) {
			validMove = true;
		}

		return validMove;
	}

/*************************************************************
*
* Check each direction, same logic, walk the path if at first
* an opposing piece is adjacent, then stop and succeed if it ends
* the same piece.
*
*************************************************************/

	validateDirection( direction, props ) {
		/*
		* if the adjacent tile is the opposite player keep going
		*    if this direction also ends with same player return true.
		*/
		let next_idx = direction( props.idx );
		const opp_player = this.toOppositePlayer( props.player );
		let adjacent_is_opposite = false;
		let path_enclosed_with_same_player = false;
		do{ 
			if( next_idx > -1 ) {
				
				let adj_player = props.squares[next_idx];

				/* 
				* are we next to or ending with an undefined square? 
				*/
				if( _.isUndefined(adj_player) ) {
					return false;
				}
				
				/* 
				* are we adjacent to the same piece we are? 
				*/
				if( !adjacent_is_opposite && adj_player === props.player ) {
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
				} else if( adjacent_is_opposite && props.player === adj_player ) {
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
	updateSquares( props ) {
		let movement = [ props.idx ];
		const bn = new BoardNavigation();
		movement = _.concat( movement, this.findMovesInDirection( bn.top, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.topRight, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.topLeft, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.right, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.bottom, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.bottomRight, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.bottomLeft, props ) );
		movement = _.concat( movement, this.findMovesInDirection( bn.left, props ) );

		_.each( movement, ( i ) => {
			props.squares[i] = props.player;
		});

		return props.squares.slice();
	}

	findMovesInDirection( direction, props ) {
		/*
		* if the adjacent tile is the opposite player keep going
		*    if this direction also ends with same player return true.
		*/
		let potentialMoves = [];
		let next_idx = direction( props.idx );
		const opp_player = this.toOppositePlayer( props.player );
		let adjacent_is_opposite = false;
		let path_enclosed_with_same_player = false;
		do{ 
			if( next_idx > -1 ) {
				
				let adj_player = props.squares[next_idx];

				/* 
				* are we next to or ending with an undefined square? 
				*/
				if( _.isUndefined(adj_player) ) {
					return [];
				}
				
				/* 
				* are we adjacent to the same piece we are? 
				*/
				if( !adjacent_is_opposite && adj_player === props.player ) {
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
				} else if( adjacent_is_opposite && props.player === adj_player ) {
					return potentialMoves.slice();
				} 
			}
		} while( next_idx > -1 && next_idx < 64 );

	}

/*************************************************************
*
* from player W into B and visa versa
*
*************************************************************/
	toOppositePlayer( player ) {
		return player === 'W' ? 'B' : 'W';
	}


}


export default MoveLogic;