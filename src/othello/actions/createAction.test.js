import createAction from './createAction';

describe('createAction test suite', () => {
	let type;
	let payload;
	beforeAll( () => {
		const action = createAction( 'MAKE_MY_DAY', { some:'object', defined:'here' } );
		type = action.type;
		payload = action.payload;
	});

	it( 'type#MAKE_MY_DAY', () => {
		expect( type ).toEqual( 'MAKE_MY_DAY' );
	});
	it( 'payload.some', () => {
		expect( payload ).toHaveProperty( 'some' );
	});
	it( 'payload.defined', () => {
		expect( payload ).toHaveProperty( 'defined' );
	});
	it( 'payload.some=object', () => {
		expect( payload.some).toEqual('object');
	});
	it('payload.defined=here', () => {
		expect(payload.defined).toEqual('here');
	});
})
