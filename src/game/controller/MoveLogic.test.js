import MoveLogic from './MoveLogic';
import BoardNavigation from './BoardNavigation';
import GameBoardPieces from '../model/GameBoardPieces';
import GameState from '../model/GameState';

describe('MoveLogic Test Suite', () => {
    it('isValidMove#true', () => {

        const pieces = new GameBoardPieces();
        pieces.idx = 29;
        const ml = new MoveLogic();
        expect( ml.isValidMove( pieces ) ).toBe(true);

    });

    it('isValidMove#false', () => {

        const pieces = new GameBoardPieces();
        pieces.idx = 15;
        const ml = new MoveLogic();
        expect( ml.isValidMove( pieces ) ).toBe(false);

    });

    it('validateDirection#true', () => {

        const pieces = new GameBoardPieces();
        pieces.idx = 29;
        const ml = new MoveLogic();
        const bn = new BoardNavigation();
        expect( ml.validateDirection( bn.left, pieces ) ).toBe(true);
    });

    it('validateDirection#false', () => {

        const pieces = new GameBoardPieces();
        pieces.idx = 29;
        const ml = new MoveLogic();
        const bn = new BoardNavigation();
        expect( ml.validateDirection( bn.right, pieces ) ).toBe(false);
    });

    it('hasMove', () => {
        const pieces = new GameBoardPieces();
        const ml = new MoveLogic();
        expect( ml.hasMove( pieces ) ).toBe( true );
    });

    it('findMovesInDirection', () => {
        const pieces = new GameBoardPieces();
        pieces.idx = 29;
        const nav = new BoardNavigation();
        const ml = new MoveLogic();
        expect( ml.findMovesInDirection( nav.left, pieces) ).toEqual( expect.arrayContaining([28]) );
    });

    it('updateSquares', () => {
        const pieces = new GameBoardPieces();
        pieces.idx = 29;
        const nav = new BoardNavigation();
        const ml = new MoveLogic();
        ml.updateSquares(pieces);
        expect( pieces.squares[27] ).toBe('W');
        expect( pieces.squares[28] ).toBe('W');
        expect( pieces.squares[29] ).toBe('W');
        expect( pieces.squares[35] ).toBe('B');
        expect( pieces.squares[36] ).toBe('W');

    });

    it('toOppositePlayer', () => {
        const ml = new MoveLogic();
        expect( ml.toOppositePlayer( 'W' ) ).toBe( 'B' );
    });

    it( 'checkMove#success', ( done ) => {
        const state = new GameState();
        const ml = new MoveLogic();
        ml.checkMove( 29, state )
            .then( (state) => { 
                expect( state.history.length).toBe(2);
                done();
            })
            .catch( (err) => done( err ) );
    });
});