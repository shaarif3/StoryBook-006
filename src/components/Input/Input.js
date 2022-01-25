import React from 'react';
import './Input.css';
function Input(props) {
  const {
    placeholder = 'Enter your email',
    size = 'small',
    children,
    ...rest
  } = props;

  return (
    <input type='text' className={`input ${size}`} placeholder={placeholder} />
  );
}

export default Input;
