import React from 'react';

export const Button = (props) => {
  return (
    <button className="button" type="button" onClick={props.onClick}>
    </button>
  );
};

Button.props = {
    onClick: () => {},
};
  
