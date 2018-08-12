import { toOppositePlayer } from "./_toOppositePlayer";

describe('toOppositePlayer Test Suite', () => {
    
    it('toOppositePlayer W', () => {
        expect( toOppositePlayer( 'W' ) ).toBe( 'B' );
    });

    it('toOppositePlayer B', () => {
        expect( toOppositePlayer( 'B' ) ).toBe( 'W' );
    });
});