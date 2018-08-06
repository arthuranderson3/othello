import React, { Component } from 'react';

export default class Square extends Component {

	render() {
		let classes = 'square';
		let sym = '';

		if( this.props.value ) {
			if( this.props.value === 'W') {
				//classes += ' square-white';
				sym = String.fromCodePoint(9898); // unicode white circle
			} else {
				//classes += ' square-black';
				sym = String.fromCodePoint(9899); // unicode black circle
			}
		}

		return ( 
						<div
								className={classes} 
								rowid={this.props.rowid} 
								colid={this.props.colid} 
								onClick={(i) => this.props.onClick(this.props.rowid * 8 + this.props.colid) }>{sym}</div> 
						);
	}
}
