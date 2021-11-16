import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";

export default (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};