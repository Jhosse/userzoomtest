import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

import "./styles.css";

export default (): ReactElement => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
