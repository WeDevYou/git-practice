import React from "react";

export const UserList = (props) => {
  return (
    <li onClick={props.onClick}></li>
  );
};
  
UserList.props = {
  onClick: () => {},
};