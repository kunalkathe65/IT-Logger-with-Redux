import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
  const { id, firstName, lastName } = tech;

  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: `${firstName} ${lastName} is removed as a tech!` });
  };

  return (
    <li className="collection-item">
      <div>
        <span className="black-text">
          {firstName} {lastName}
        </span>
        <a href="!#" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func,
};

export default connect(null, { deleteTech })(TechItem);
