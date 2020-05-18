import React, { Fragment, useEffect } from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    //initializes Materialize JS
    M.AutoInit();
  });
  return <Fragment>My App</Fragment>;
};

export default App;
