import React from 'react';
import './input.css'; // Optional: style it separately

const Input = ({
  type = 'text',
  placeholder = 'Enter text',
  value,
  onChange,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="my-ui-input"
      {...rest}
    />
  );
};

export default Input;
