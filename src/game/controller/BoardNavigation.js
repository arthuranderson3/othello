import React from 'react';
import _ from 'lodash';

export default class BoardNavigation {

    constructor() {
        _.bindAll(this, ['toRow'
            , 'toCol'
            , 'toIdx'
            , 'createRowCol'
            , 'top'
            , 'topRight'
            , 'topLeft'
            , 'right'
            , 'left'
            , 'bottom'
            , 'bottomRight'
            ,'bottomLeft']);
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
