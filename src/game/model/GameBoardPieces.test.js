import { GameBoardPieces } from './GameBoardPieces';
import _ from 'lodash';

describe('GameBoardPieces fs.WriteStream(path, options); suite', () => {
	
    it('#player ', () => {
        const pieces = new GameBoardPieces();
        expect( pieces.player ).toBe('W');
    });
	
    it('#idx ', () => {
        const pieces = new GameBoardPieces();
        expect( pieces.idx ).toBeUndefined();
    });
	
    it('#squares ', () => {
        const pieces = new GameBoardPieces();
        expect( pieces.squares.length ).toBe(64);
    });


    it('#clone ', () => {
        const pieces = new GameBoardPieces();
        const cloned = pieces.clone();
        expect( cloned.player ).toBe('W');
        expect( cloned.idx ).toBeUndefined();
        expect( cloned.squares.length ).toBe(64); 

    });

    it('#clone2 ', () => {
        const gameBoard = {
                squares: [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                            , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                            , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                            , undefined, undefined, undefined,       'W',       'W',       'W', undefined, undefined 
                            , undefined, undefined, undefined,       'B',       'W', undefined, undefined, undefined 
                            , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                            , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                            , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
                , player: 'W'
                , idx: 21
            };

       const pieces = new GameBoardPieces(gameBoard);
       const cloned = pieces.clone();
       pieces.squares[20] = 'W';
       pieces.idx = 1;

       expect( cloned.squares[20] ).toBeUndefined();
       expect( cloned.squares[29] ).toBe('W');
       expect( cloned.idx ).toBe(21);
       expect( pieces.squares[20] ).toBe('W');
       expect( pieces.idx ).toBe(1);

    });

    it('#ctor props', () => {
        const props = {
            player: 'B',
            idx: 27,
            squares: [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined,       'W',       'B', undefined, undefined, undefined 
                , undefined, undefined, undefined,       'B',       'W', undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined 
                , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
        };
        const pieces = new GameBoardPieces( props );
        expect( pieces.player ).toBe( 'B' );
        expect( pieces.squares.length ).toBe( 64 );
        expect( pieces.idx ).toBe( 27 );
    });

});