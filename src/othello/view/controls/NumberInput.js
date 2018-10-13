import React from 'react';

const TextInput = ({ label, numberChange, placeholder, value }) => (
  <React.Fragment>
    <label htmlFor="idNumber" className="label-form-control">
      {label}{' '}
    </label>
    <input
      type="number"
      id="idNumber"
      className="form-control"
      onChange={e => numberChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  </React.Fragment>
);

export default TextInput;
