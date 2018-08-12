import _ from 'lodash';
import { top, topLeft, topRight} from '../boardNavigation';
import { right, left } from '../boardNavigation';
import { bottom, bottomRight, bottomLeft } from '../boardNavigation';
import { findMovesInDirection } from './_findMovesInDirection';

/*************************************************************
*
* Create a list of all the squares that need to be updated
* then update them all at the end.
*
*************************************************************/
export function updateSquares( pieces ) {
    let movement = [ pieces.idx ];
    let newPieces = pieces.clone();
    //
    // accumulate all the board squares that will turn
    //
    movement = _.concat( movement, findMovesInDirection( top, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( topRight, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( topLeft, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( right, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( bottom, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( bottomRight, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( bottomLeft, newPieces ) );
    movement = _.concat( movement, findMovesInDirection( left, newPieces ) );

    _.each( movement, ( i ) => {
        newPieces.squares[i] = pieces.player;
    });
    return newPieces;
}
