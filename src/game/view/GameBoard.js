import _ from 'lodash';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import './GameBoard.css';

export default class GameBoard extends Component {
	render() { 
		const rowSquares = _.chunk( this.props.squares, 8 );
		const board = rowSquares.map( ( squares, idx ) => {
												return( 
													<BoardRow key={idx}
																	rowid={idx} 
																	squares={squares}
																	onClick={(i) => this.props.onClick(i) } /> 
													);
									});	
		return (<div className='card game-board shadow'>
							<div className='card-text'>
			{ board }</div>
								<div className='card-footer game-footer'>
									<button type="button" className="btn btn-primary btn-sm">Reset</button>&nbsp;
									<button type="button" className="btn btn-secondary btn-sm">Undo</button>
								</div>
							</div>);
	}
}
