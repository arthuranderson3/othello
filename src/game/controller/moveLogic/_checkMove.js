import { hasMove } from './_hasMove';
import { isValidMove } from './_isValidMove';
import { updateSquares } from './_updateSquares';
import { toOppositePlayer } from './_toOppositePlayer';


export function checkMove( idx, state ) {
    return new Promise( ( resolve, reject ) => {
        const currentState = state;
        const gameBoardPieces = currentState.getLastBoard();
        gameBoardPieces.idx = idx;

        if( ! hasMove( gameBoardPieces ) ) {
            return reject( new Error('not valid move') );

        } else if ( isValidMove( gameBoardPieces ) ) {

            const newGamePieces = updateSquares( gameBoardPieces );
            // see if the next player has a move.
            const next_player = toOppositePlayer( newGamePieces.player );
            newGamePieces.player = next_player;
            
            if( ! hasMove( newGamePieces ) ){

                newGamePieces.player = toOppositePlayer( newGamePieces.player);
            }
            currentState.recordLastBoard( newGamePieces );

            return resolve( currentState );
        } 
    });
}
