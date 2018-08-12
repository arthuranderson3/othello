import _ from 'lodash';
import { validateDirection } from './_validateDirection';
import { top, topLeft, topRight} from '../boardNavigation';
import { right, left } from '../boardNavigation';
import { bottom, bottomRight, bottomLeft } from '../boardNavigation';

/*************************************************************
*
* check the board against the current choice of move to see if
* it is a valid move or not
* REF: can refactor this into seperate async checks and join at end
*
*************************************************************/
export function isValidMove( pieces ) {
    // we have an open square?
    if( _.isUndefined( pieces.squares[pieces.idx] ) ){


        let validMove = false;
        //
        // we are adjacent to opposing player with player's square enclosing the line.
        // Keep track of validMove to speed up whether or not this is a valid move.
        //
        if( validateDirection( top, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( topRight, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( topLeft, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( right, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( left, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( bottom, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( bottomRight, pieces ) ) {
            validMove = true;
        }
        if( !validMove && validateDirection( bottomLeft, pieces ) ) {
            validMove = true;
        }

        return validMove;
    } else {
        return false;
    }

}
