import React from "react";

const navButton = props => {
  return (
    <div>
    <li className="nav-item">
      <a className="nav-link active" href={props.route} key={props.action}>
        {props.action}
      </a>
    </li>
    </div>
  );
};

export default navButton;
