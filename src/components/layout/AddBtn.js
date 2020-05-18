import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        className="btn-floating btn-large blue darken-2 modal-trigger"
        href="#add-log-modal"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            className="btn-floating red lighten-1 modal-trigger"
            href="#tech-list-modal"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            className="btn-floating green modal-trigger"
            href="#add-tech-modal"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AddBtn;
