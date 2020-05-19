import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateLog } from "../../actions/logActions";

const EditLogModal = ({ updateLog, current }) => {
  //state
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter message & tech!" });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };
      updateLog(updatedLog);
      M.toast({ html: "Log Updated!" });

      //resetting form
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div
      id="edit-log-modal"
      className="modal"
      style={{ width: "70%", height: "70%", padding: "10px" }}
    >
      <form onSubmit={onSubmit}>
        <strong>
          <h6 className="center">Edit Log</h6>
        </strong>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              value={tech}
              name="tech"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Williams">Sara Williams</option>
            </select>
          </div>
        </div>
        <div className="row">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Need attention ?</span>
            </label>
          </p>
        </div>
        <button className="btn waves-effect waves-light blue" type="submit">
          Edit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updatedLog: PropTypes.func,
};

const mapStateToProp = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProp, { updateLog })(EditLogModal);
