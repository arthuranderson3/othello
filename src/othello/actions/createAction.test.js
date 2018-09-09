import createAction from './createAction';

describe('createAction test suite', () => {
	it( 'default', () => {
		const { type, payload } = createAction( 'MAKE_MY_DAY', { some:'object', defined:'here' } );

		expect( type ).toEqual( 'MAKE_MY_DAY' );
		expect( payload ).toHaveProperty('some');
		expect( payload ).toHaveProperty('defined');
		expect( payload.some).toEqual('object');
		expect( payload.defined ).toEqual( 'here');
	})
})
