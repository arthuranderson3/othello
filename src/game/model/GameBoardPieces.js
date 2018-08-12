import React from 'react';
import _ from 'lodash';

const defaultGameBoard = {
    squares: [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
        , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
        , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
        , undefined, undefined, undefined,       'W',       'B', undefined, undefined, undefined 
        , undefined, undefined, undefined,       'B',       'W', undefined, undefined, undefined 
        , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
        , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
        , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
    , player: 'W'
};

export class GameBoardPieces {
    constructor( props = defaultGameBoard ) {

        this.squares = props.squares.slice();
        this.player = props.player;
        this.idx = props.idx;

        _.bindAll( this, ['clone']);
    }

    clone() {
        return new GameBoardPieces( this );
    }
}