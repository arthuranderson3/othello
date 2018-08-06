import React, { Component } from 'react';
import _ from 'lodash';

export default class KnownCodePoints extends Component {
	render() {
		let codePointsMax = 10240;
		let codePoints = [];
		for( let idx = 9000; idx < codePointsMax; idx++ ){
			codePoints.push( idx );
		}

		let knownCodePoints = _.map( codePoints, ( val ) => { 
				//console.info( { val: val, sval:sval } );
				return (
				<tr key={val}><td>{val}</td><td>{String.fromCodePoint(val)}</td></tr>
				);
		});
		return (
			<div>
				<table className='table bg-light'>
				<tbody>
					{knownCodePoints}
					</tbody>
				</table>
			</div>
		);
	}
}
