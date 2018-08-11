import React from 'react';
import _ from 'lodash';

export default class GameBoardPieces {
    constructor( props ) {
        if( _.isUndefined( props ) || _.isUndefined( props.squares ) ) {
            this.squares = [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined,       'W',       'B', undefined, undefined, undefined 
                , undefined, undefined, undefined,       'B',       'W', undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ];
        } else {
            this.squares = props.squares.slice();
        }

        if( _.isUndefined( props ) || _.isUndefined( props.player ) ) {
            this.player = 'W';
        } else {
            this.player = props.player;
        }

        if( _.isUndefined( props ) || _.isUndefined( props.idx ) ) {
            this.idx = undefined;
        } else {
            this.idx = props.idx;
        }

        _.bindAll( this, ['clone']);
    }

    clone() {
        return new GameBoardPieces( this );
    }

}