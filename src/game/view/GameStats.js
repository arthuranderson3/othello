import React, { Component } from 'react';
import _ from 'lodash';

export default class GameStats extends Component {

	render() {
		const whiteCircle = String.fromCodePoint(9898);
		const blackCircle = String.fromCodePoint(9899);
		const player = ( this.props.player === 'W' ) ? whiteCircle : blackCircle;
		const wCount = _.filter( this.props.squares, (square) => square === 'W' ).length;
		const bCount = _.filter( this.props.squares, (square) => square === 'B' ).length;
		return ( <div className="shadow">
				<table className="table" >
					<thead>
						<tr>
							<th>Player</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{whiteCircle}</td>
							<td>{wCount}</td>
						</tr>
						<tr>
							<td>{blackCircle}</td>
							<td>{bCount}</td>
						</tr>
					</tbody>
				</table>
				</div> );
	}
}