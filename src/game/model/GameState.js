import React from 'react';
import GameBoardPieces from './GameBoardPieces';
import _ from 'lodash';

export default class GameState {

    constructor( props ) {
        if( _.isUndefined(props) || _.isUndefined(props.history ) ) {

            this.history = [];
            this.history.push( new GameBoardPieces() );
        } else {
            this.history = props.history.slice();
        }
        _.bindAll(this, ['getLastBoard'
            , 'recordLastBoard'
            , 'getTurn'] );
    }

    getTurn() {
        return this.history.length;
    }

    getLastBoard() {
        const len = this.history.length;
        if( len > 0 ) {
            return this.history[ len - 1 ].clone();
        } else {
            return [];
        }
    }

    recordLastBoard( gb ) {
        this.history.push( gb );
    }
}