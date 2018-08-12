import { createRowCol } from './_createRowCol';

describe('createRowCol Test Suite', () => {

    it('#createRowCol -- success', () => {
        expect( createRowCol( 0, 0 ) ).toHaveProperty('row', 0);
        expect( createRowCol( 0, 1 ) ).toHaveProperty('col', 1);
        expect( createRowCol( 0, 2 ) ).toHaveProperty('col', 2);
    });

    it('#createRowCol -- out of bounds', () => {
        expect( createRowCol( -1, 0 ) ).toBeUndefined();
        expect( createRowCol( 0, -1 ) ).toBeUndefined();
        expect( createRowCol( 8, 0 ) ).toBeUndefined();
        expect( createRowCol( 0, 8 ) ).toBeUndefined();
    });
});