import React, { Component } from 'react';
import _ from 'lodash';

export default class GameStats extends Component {

	render() {
		const whiteCircle = String.fromCodePoint(9898);
		const blackCircle = String.fromCodePoint(9899);
		const player = ( this.props.player === 'W' ) ? whiteCircle : blackCircle;
		const wCount = _.filter( this.props.squares, (square) => square === 'W' ).length;
		const bCount = _.filter( this.props.squares, (square) => square === 'B' ).length;
		return ( <div className="card shadow">
					<div className="card-body">
						<h5 className="card-title">Score</h5>
						<p className="card-text"><span className="circleFont">{whiteCircle}</span>:&nbsp;{wCount}&nbsp;
																		<span className="circleFont">{blackCircle}</span>:&nbsp;{bCount}</p>
						<p className="card-text">Current player: &nbsp; <span className="circleFont">{player}</span></p>
					</div>
					<div className="card-footer">
						<p className="small">Last Updated: &nbsp; {new Date().toTimeString()} </p>
					</div>
				</div> );
	}
}