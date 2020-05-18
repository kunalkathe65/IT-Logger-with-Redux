import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  //State
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  //Get Techs
  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal" style={{ padding: "10px" }}>
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? (
            <h4>No Technicians!</h4>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};
export default TechListModal;
