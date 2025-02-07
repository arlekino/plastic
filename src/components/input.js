import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', name, placeholder, value, onChange, label }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label" for={'input_'+name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={'input_'+name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Input;