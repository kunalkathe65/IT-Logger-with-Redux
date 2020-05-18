import React, { useEffect, useState } from "react";

import Log from "./LogItem";

const Logs = () => {
  //State
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  //Get Logs
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();
    console.log(data);
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4 className="center">Loading....</h4>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h3>System Logs</h3>
      </li>
      {loading === false && logs.length === 0 ? (
        <p className="center">No logs...</p>
      ) : (
        logs.map((log) => <Log log={log} key={log.id} />)
      )}
    </ul>
  );
};
export default Logs;
