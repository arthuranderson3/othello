import BoardNavigation from './BoardNavigation';

describe('BoardNavigation Test Suite', () => {
    it('#toRow -- Row from Idx', () => {
        const bn = new BoardNavigation();
        expect( bn.toRow(7) ).toBe( 0 );
        expect( bn.toRow(8) ).toBe( 1 );
        expect( bn.toRow(15) ).toBe( 1 );
        expect( bn.toRow(16) ).toBe( 2 );
        expect( bn.toRow(23) ).toBe( 2 );
        expect( bn.toRow(24) ).toBe( 3 );
    });

    it('#toRow -- undefined for out of bounds Row idx', () => {
        const bn = new BoardNavigation();
        expect( bn.toRow(-1)).toBeUndefined();
        expect( bn.toRow(64)).toBeUndefined();
    });

    it('#toCol -- Column from Idx', () => {
        const bn = new BoardNavigation();
        expect( bn.toCol(0) ).toBe(0);
        expect( bn.toCol(8) ).toBe(0);
        expect( bn.toCol(9) ).toBe(1);
        expect( bn.toCol(17) ).toBe(1);
        expect( bn.toCol(18) ).toBe(2);
    });

    it('#toCol -- undefined for out of bounds Col idx', () => {
        const bn = new BoardNavigation();
        expect( bn.toCol(-1)).toBeUndefined();
        expect( bn.toCol(64)).toBeUndefined();
    });

    it('#toIdx -- Idx for Row and Col', () => {
        const bn = new BoardNavigation();
        expect( bn.toIdx( { row: 0, col: 0 } )).toBe(0);
        expect( bn.toIdx( { row: 0, col: 1 } )).toBe(1);
        expect( bn.toIdx( { row: 1, col: 0 } )).toBe(8);
        expect( bn.toIdx( { row: 1, col: 1 } )).toBe(9);
        expect( bn.toIdx( { row: 1, col: 2 } )).toBe(10);
    });

    it('#toIdx -- out of bounds for toIdx', () => {
        const bn = new BoardNavigation();
        expect( bn.toIdx( { row: 0, col: undefined } )).toBeUndefined();
        expect( bn.toIdx( { row: undefined, col: 0 } )).toBeUndefined();
        expect( bn.toIdx( undefined )).toBeUndefined();
    });

    it('#createRowCol -- success', () => {
        const bn = new BoardNavigation();
        expect( bn.createRowCol( 0, 0 ) ).toHaveProperty('row', 0);
        expect( bn.createRowCol( 0, 1 ) ).toHaveProperty('col', 1);
        expect( bn.createRowCol( 0, 2 ) ).toHaveProperty('col', 2);
    });

    it('#createRowCol -- out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.createRowCol( -1, 0 ) ).toBeUndefined();
        expect( bn.createRowCol( 0, -1 ) ).toBeUndefined();
        expect( bn.createRowCol( 8, 0 ) ).toBeUndefined();
        expect( bn.createRowCol( 0, 8 ) ).toBeUndefined();
    });

    it('#top - success', () => {
        const bn = new BoardNavigation();
        expect( bn.top(8) ).toBe(0);
        expect( bn.top(63) ).toBe(55);
    });

    it('#top - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.top(0)).toBeUndefined();
        expect( bn.top(65)).toBeUndefined();
    });

    it('#topLeft - success', () => {
        const bn = new BoardNavigation();
        expect( bn.topLeft(9)).toBe(0);
        expect( bn.topLeft(10)).toBe(1);
    });

    it('#topLeft - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.topLeft(0)).toBeUndefined();
        expect( bn.topLeft(7)).toBeUndefined();
    });

    it('#topRight - success', () => {
        const bn = new BoardNavigation();
        expect( bn.topRight(9)).toBe(2);
        expect( bn.topRight(10)).toBe(3);
    });

    it('#topRight - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.topRight(0)).toBeUndefined();
        expect( bn.topRight(6)).toBeUndefined();
    });

    it('#left - success', () => {
        const bn = new BoardNavigation();
        expect( bn.left(9)).toBe(8);
        expect( bn.left(10)).toBe(9);
    });

    it('#left - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.left(0)).toBeUndefined();
        expect( bn.left(8)).toBeUndefined();
    });

    it('#right - success', () => {
        const bn = new BoardNavigation();
        expect( bn.right(9)).toBe(10);
        expect( bn.right(10)).toBe(11);
    });

    it('#right - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.right(7)).toBeUndefined();
        expect( bn.right(63)).toBeUndefined();
    });

    it('#bottom - success', () => {
        const bn = new BoardNavigation();
        expect( bn.bottom(0)).toBe(8);
        expect( bn.bottom(1)).toBe(9);
    });

    it('#bottom - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.bottom(-1)).toBeUndefined();
        expect( bn.bottom(58)).toBeUndefined();
    });

    it('#bottomRight - success', () => {
        const bn = new BoardNavigation();
        expect( bn.bottomRight(0)).toBe(9);
        expect( bn.bottomRight(1)).toBe(10);
    });

    it('#bottomRight - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.bottomRight(7)).toBeUndefined();
        expect( bn.bottomRight(63)).toBeUndefined();
    });

    it('#bottomLeft - success', () => {
        const bn = new BoardNavigation();
        expect( bn.bottomLeft(1)).toBe(8);
        expect( bn.bottomLeft(2)).toBe(9);
    });

    it('#bottomLeft - out of bounds', () => {
        const bn = new BoardNavigation();
        expect( bn.bottomLeft(0)).toBeUndefined();
        expect( bn.bottomLeft(62)).toBeUndefined();
    });
});
