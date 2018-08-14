import React, { Component } from 'react';
import { toIdx, createRowCol } from '../controller/boardTransform';

export default class Square extends Component {
  render() {
    let classes = 'square';
    let sym = '';

    const idx = toIdx(createRowCol(this.props.rowid, this.props.colid));
    if (this.props.value) {
      if (this.props.value === 'W') {
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
        onClick={() => this.props.onClick(idx)}
      >
        {sym}
      </div>
    );
  }
}
