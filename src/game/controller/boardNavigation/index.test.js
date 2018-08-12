import {top, topLeft, topRight } from "./index";
import { right, left } from "./index";
import { bottom, bottomRight, bottomLeft } from "./index";

describe('boardNavigation Test Suite', () => {

    it('#top - success', () => {
        expect( top(8) ).toBe(0);
        expect( top(63) ).toBe(55);
    });

    it('#top - out of bounds', () => {
        expect( top(0)).toBeUndefined();
        expect( top(65)).toBeUndefined();
    });

    it('#topLeft - success', () => {
        expect( topLeft(9)).toBe(0);
        expect( topLeft(10)).toBe(1);
    });

    it('#topLeft - out of bounds', () => {
        expect( topLeft(0)).toBeUndefined();
        expect( topLeft(7)).toBeUndefined();
    });
    it('#topRight - success', () => {
        
        expect( topRight(9)).toBe(2);
        expect( topRight(10)).toBe(3);
    });

    it('#topRight - out of bounds', () => {
        
        expect( topRight(0)).toBeUndefined();
        expect( topRight(6)).toBeUndefined();
    });

    it('#left - success', () => {
        
        expect( left(9)).toBe(8);
        expect( left(10)).toBe(9);
    });

    it('#left - out of bounds', () => {
        
        expect( left(0)).toBeUndefined();
        expect( left(8)).toBeUndefined();
    });

    it('#right - success', () => {
        
        expect( right(9)).toBe(10);
        expect( right(10)).toBe(11);
    });

    it('#right - out of bounds', () => {
        
        expect( right(7)).toBeUndefined();
        expect( right(63)).toBeUndefined();
    });

    it('#bottom - success', () => {
        
        expect( bottom(0)).toBe(8);
        expect( bottom(1)).toBe(9);
    });

    it('#bottom - out of bounds', () => {
        
        expect( bottom(-1)).toBeUndefined();
        expect( bottom(58)).toBeUndefined();
    });

    it('#bottomRight - success', () => {
        
        expect( bottomRight(0)).toBe(9);
        expect( bottomRight(1)).toBe(10);
    });

    it('#bottomRight - out of bounds', () => {
        
        expect( bottomRight(7)).toBeUndefined();
        expect( bottomRight(63)).toBeUndefined();
    });

    it('#bottomLeft - success', () => {
        
        expect( bottomLeft(1)).toBe(8);
        expect( bottomLeft(2)).toBe(9);
    });

    it('#bottomLeft - out of bounds', () => {
        
        expect( bottomLeft(0)).toBeUndefined();
        expect( bottomLeft(62)).toBeUndefined();
    });
});
