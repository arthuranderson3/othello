import createValidSquares from './createValidSquares';

describe('createValidSquares test suite', () => {
	describe('properties', () => {
		let squares;
		beforeAll( () => {
			squares = createValidSquares( [28, 29, 45, 47] );
		});

		it('squares.validSquares', () => {
			expect(squares).toHaveProperty('validSquares');
		});
	});

	describe('values', () => {
		let squares;
		beforeAll( () => {
			squares = createValidSquares( [28, 29, 45, 47] );
		});

		it('squares.validSquares=[28,29,45,47]', () => {
			expect(squares.validSquares).toEqual([28,29,45,47]);
		});
	});

	describe('bad input', () => {
		it('squares.undefined', () => {
			const squares = createValidSquares( { someObject:'bad input' } );
			expect( squares ).toBeUndefined();
		});
	});
});
