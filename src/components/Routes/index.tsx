import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../../pages/Welcome";

export default (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  );
};