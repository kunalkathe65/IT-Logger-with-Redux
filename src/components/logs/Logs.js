import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h3>System Logs</h3>
      </li>
      {loading === false && logs.length === 0 ? (
        <p className="center">No logs...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //passing state as a prop
  log: state.log, //TAKING WHOLE STATE
  //logs:state.log.logs,
  //loading:state.log.loading //VALID TO POP OUT THE INDIVIDUAL PIECE OF STATE WE WANT
});
export default connect(mapStateToProps, { getLogs })(Logs); //connect provides state and actions as a prop
