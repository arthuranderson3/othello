import _ from 'lodash';
import { isValidMove } from './_isValidMove';

export function hasMove( pieces ) {
    // gather all potential movement squares.
    const board_map = _.map( pieces.squares, ( val, idx ) => { return { idx: idx, square: val }; } );
    const potential_moves = _.filter( board_map, ( board_piece ) => { return _.isUndefined(board_piece.square); } );
    return _.some( potential_moves, ( obj ) => { 
        return isValidMove( { idx: obj.idx, squares: pieces.squares, player: pieces.player }); } );
}
