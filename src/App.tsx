import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

export default (): ReactElement => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
