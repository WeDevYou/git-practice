import React from 'react';
import './Button.css';

export const Button = (props) => {
  return (
    <button className="button" type="button" onClick={props.onClick}>{props.text}</button>
  );
};

Button.props = {
    onClick: () => {},
};