import React from "react";
import Moment from "react-moment";

const LogItem = (props) => {
  const { id, message, attention, date, tech } = props.log;
  return (
    <li className="collection-item">
      <div>
        <a
          href="edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span>last updated by &nbsp;
          <span className="black-text">{tech}</span> on{" "}
          <span className="black-text">
            <Moment format="MMMM do YYYY,h:mm:ss a">{date}</Moment>
          </span>
        </span>
        <a href="!#" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
export default LogItem;
