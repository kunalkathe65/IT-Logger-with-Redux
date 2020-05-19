import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

import { deleteLog, setCurrent } from "../../actions/logActions";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { id, message, attention, date, tech } = log;

  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: "Log deleted!" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          onClick={() => setCurrent(log)}
          className={`modal-trigger ${attention ? "red-text" : "green-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span>last updated by &nbsp;
          <span className="black-text">{tech}</span> on{" "}
          <span className="black-text">
            <Moment format="DD/MM/YYYY,h:mm:ss a">{date}</Moment>
          </span>
        </span>
        <a href="!#" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
export default connect(null, { deleteLog, setCurrent })(LogItem);
