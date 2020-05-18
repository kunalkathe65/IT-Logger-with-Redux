import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  //state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter firstname & lastname!" });
    } else {
      console.log("added");
      //resetting form
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal" style={{ padding: "10px" }}>
      <form onSubmit={onSubmit}>
        <strong>
          <h6 className="center">Add New Technician</h6>
        </strong>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <button className="btn waves-effect waves-light blue" type="submit">
          Add
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};
export default AddTechModal;
