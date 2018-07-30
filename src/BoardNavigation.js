import React from 'react';
import _ from 'lodash';

class BoardNavigation {

	constructor() {
		this.toRow = this.toRow.bind(this);
		this.toCol = this.toCol.bind(this);
		this.toIdx = this.toIdx.bind(this);
		this.createRowCol = this.createRowCol.bind(this);
		this.top = this.top.bind(this);
		this.topRight = this.topRight.bind(this);
		this.topLeft = this.topLeft.bind(this);
		this.right = this.right.bind(this);
		this.left = this.left.bind(this);
		this.bottom = this.bottom.bind(this);
		this.bottomRight = this.bottomRight.bind(this);
		this.bottomLeft = this.bottomLeft.bind(this);
	}
/*************************************************************
*
* transform index into row
*
*************************************************************/

	toRow( i ) {
		if( i < 0 || i > 63 ) {
			return undefined;
		}
		return Math.floor(i / 8);
	}

/*************************************************************
*
* transform index into column
*
*************************************************************/
	toCol( i ) {
		if( i < 0 || i > 63 ) {
			return undefined;
		}
		return i % 8;
	}

/*************************************************************
*
* from { row, col } into index
*
*************************************************************/
	toIdx( obj ) {
		if( !_.isUndefined(obj) && !_.isUndefined(obj.row) && !_.isUndefined(obj.col) ) { 
			return obj.row * 8 + obj.col;
		}
		return undefined;
	}

/*************************************************************
*
* create { row, col }
*
*************************************************************/
	createRowCol( row, col ) {
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
	top( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow( i ) - 1, 
								this.toCol( i ) ) );
	}

/*************************************************************
*
* move in the northwest direction
*
*************************************************************/
	topLeft( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) - 1, 
								this.toCol(i) - 1 ) );
	}

/*************************************************************
*
* move in the northeast direction
*
*************************************************************/
	topRight( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) - 1, 
								this.toCol(i) + 1 ) );
	}

/*************************************************************
*
* move in the west direction
*
*************************************************************/
	left( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i), 
								this.toCol(i) - 1 ) );
	}

/*************************************************************
*
* move in the east direction
*
*************************************************************/
	right( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i), 
								this.toCol(i) + 1 ) );
	}

/*************************************************************
*
* move in the southwest direction
*
*************************************************************/
	bottomLeft( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) + 1, 
								this.toCol(i) - 1 ) );
	}

/*************************************************************
*
* move in the south direction
*
*************************************************************/
	bottom( i ) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) + 1, 
								this.toCol(i) ) );
	}

/*************************************************************
*
* move in the southeast direction
*
*************************************************************/
	bottomRight(i) {
		return this.toIdx( 
							this.createRowCol( 
								this.toRow(i) + 1, 
								this.toCol(i) + 1 ) );
	}

}

export default BoardNavigation;