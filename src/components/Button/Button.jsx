import { useState } from "react";

export const Button = (props) => {
	console.log(props)

  return <button onClick={props.onClick} >{props.text}</button>;
};

