import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal" style={{ padding: "10px" }}>
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {!loading && techs === null ? (
            <h4>No Technicians!</h4>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object,
  getTechs: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
