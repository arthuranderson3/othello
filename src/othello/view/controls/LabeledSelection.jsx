import React from 'react';

export function createOptions(names) {
  return names.map(name => ({ value: name, text: name }));
}

export function createPairedOptions(paired) {
  return paired.map(pair => ({ value: pair[0], text: pair[1] }));
}

const LabeledSelection = ({ label, value, options, onChange }) => (
  <React.Fragment>
    <div className="form-group">
      <label className="col-form-label" htmlFor="idSelection">
        {label}
      </label>
      <select
        id="idSelection"
        className="form-control"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  </React.Fragment>
);

export default LabeledSelection;
