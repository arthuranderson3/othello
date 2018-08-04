import React, { Component } from 'react';

export default class Square extends Component {

	render() {
		let classes = 'square';

		if( this.props.value ) {
			if( this.props.value === 'W') {
				classes += ' square-white';
			} else {
				classes += ' square-black';
			}
		}

		return ( 
						<div 
								className={classes} 
								rowid={this.props.rowid} 
								colid={this.props.colid} 
								onClick={(i) => this.props.onClick(this.props.rowid * 8 + this.props.colid) }/> 
						);
	}
}
