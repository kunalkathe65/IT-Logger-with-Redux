import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  //state
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter message & tech!" });
    } else {
      console.log("added");

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
            <label htmlFor="message">Log Message</label>
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
          Enter
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};
export default EditLogModal;
