import React from 'react';
import _ from 'lodash';

class MoveLogic {

	constructor( props ) {
		this.idx = props.idx;
		this.squares = props.squares.slice();
		this.player = props.player;

/*************************************************************
*
* interesting thing - we need to bind / create the functions
* in this class in order to use them from button clicks.
*
*************************************************************/
		this.is_Valid_Move = this.is_Valid_Move.bind(this);
		this.validate_Direction = this.validate_Direction.bind(this);
		this.update_Squares = this.update_Squares.bind(this);
		this.to_Row = this.to_Row.bind(this);
		this.to_Col = this.to_Col.bind(this);
		this.to_Idx = this.to_Idx.bind(this);
		this.to_Opposite_Player = this.to_Opposite_Player.bind(this);
		this.create_Row_Col = this.create_Row_Col.bind(this);
		this.toNorth = this.toNorth.bind(this);
		this.toNorthEast = this.toNorthEast.bind(this);
		this.toNorthWest = this.toNorthWest.bind(this);
		this.toEast = this.toEast.bind(this);
		this.toWest = this.toWest.bind(this);
		this.toSouth = this.toSouth.bind(this);
		this.toSouthEast = this.toSouthEast.bind(this);
		this.toSouthWest = this.toSouthWest.bind(this);

	}

/*************************************************************
*
* check the board against the current choice of move to see if
* it is a valid move or not
* REF: can refactor this into seperate async checks and join at end
*
*************************************************************/
	is_Valid_Move() {
		// we have an open square?
		if( this.squares[this.idx] ) return false;

		let validMove = false;
		// we are adjacent to opposing player with player's square enclosing the line.
		if( this.validate_Direction( this.toNorth ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toNorthEast ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toNorthWest ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toEast ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toWest ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toSouth ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toSouthEast ) ) {
			validMove = true;
		}
		if( !validMove && this.validate_Direction( this.toSouthWest ) ) {
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

	validate_Direction( direction ) {
		/*
		* if the adjacent tile is the opposite player keep going
		*    if this direction also ends with same player return true.
		*/
		let next_idx = direction( this.idx );
		const opp_player = this.to_Opposite_Player( this.player );
		let adjacent_is_opposite = false;
		let path_enclosed_with_same_player = false;
		do{ 
			if( next_idx > -1 ) {
				
				let adj_player = this.squares[next_idx];

				/* 
				* are we next to or ending with an undefined square? 
				*/
				if( _.isUndefined(adj_player) ) {
					return false;
				}
				
				/* 
				* are we adjacent to the same piece we are? 
				*/
				if( !adjacent_is_opposite && adj_player === this.player ) {
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
				} else if( adjacent_is_opposite && this.player === adj_player ) {
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
	update_Squares() {
		this.squares[this.idx] = this.player;
	}
/*************************************************************
*
* transform index into row
*
*************************************************************/

	to_Row( i ) {
		return Math.floor(i / 8);
	}

/*************************************************************
*
* transform index into column
*
*************************************************************/
	to_Col( i ) {
		return i % 8;
	}

/*************************************************************
*
* from { row, col } into index
*
*************************************************************/
	to_Idx( obj ) {
		if( !_.isUndefined(obj) ) { 
			return obj.row * 8 + obj.col;
		}
		return -1;
	}

/*************************************************************
*
* from player W into B and visa versa
*
*************************************************************/
	to_Opposite_Player( player ) {
		return player === 'W' ? 'B' : 'W';
	}

/*************************************************************
*
* create { row, col }
*
*************************************************************/
	create_Row_Col( row, col ) {
		if( row > -1 && row < 8 && col > -1 && col < 8 ) {
			return { row: row, col: col };
		}
		return undefined;
	}

/*************************************************************
*
* move in the north direction
*
*************************************************************/
	toNorth( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row( i ) - 1, 
								this.to_Col( i ) ) );
	}

/*************************************************************
*
* move in the northwest direction
*
*************************************************************/
	toNorthWest( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i) - 1, 
								this.to_Col(i) - 1 ) );
	}

/*************************************************************
*
* move in the northeast direction
*
*************************************************************/
	toNorthEast( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i) - 1, 
								this.to_Col(i) + 1 ) );
	}

/*************************************************************
*
* move in the west direction
*
*************************************************************/
	toWest( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i), 
								this.to_Col(i) - 1 ) );
	}

/*************************************************************
*
* move in the east direction
*
*************************************************************/
	toEast( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i), 
								this.to_Col(i) + 1 ) );
	}

/*************************************************************
*
* move in the southwest direction
*
*************************************************************/
	toSouthWest( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i) + 1, 
								this.to_Col(i) - 1 ) );
	}

/*************************************************************
*
* move in the south direction
*
*************************************************************/
	toSouth( i ) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i) + 1, 
								this.to_Col(i) ) );
	}

/*************************************************************
*
* move in the southeast direction
*
*************************************************************/
	toSouthEast(i) {
		return this.to_Idx( 
							this.create_Row_Col( 
								this.to_Row(i) + 1, 
								this.to_Col(i) + 1 ) );
	}

}


export default MoveLogic;