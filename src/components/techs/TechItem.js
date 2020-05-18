import React from "react";

const TechItem = ({ tech }) => {
  const { firstName, lastName } = tech;
  return (
    <li className="collection-item">
      <div>
        <span className="black-text">
          {firstName} {lastName}
        </span>
        <a href="!#" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
export default TechItem;
