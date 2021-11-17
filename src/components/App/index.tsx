import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import Alert from "../Alert";

import "./styles.css";

export default (): ReactElement => {
  return (
    <>
      <Alert />
      <Router>
        <Routes />
      </Router>
    </>
  );
};
