import React from 'react';

const TextInput = ({ label, textChange, placeholder, value }) => (
  <React.Fragment>
    <label htmlFor="idInput" className="label-form-control">
      {label}{' '}
    </label>
    <input
      type="text"
      id="idInput"
      className="form-control"
      onChange={e => textChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  </React.Fragment>
);

export default TextInput;
