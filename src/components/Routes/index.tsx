import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import NewItem from "../../pages/NewItem";

export enum RouteNames {
  Home = "/",
  NewItem = "/new-item",
};

export default (): ReactElement => {
  return (
    <Switch>
      <Route exact path={RouteNames.Home} component={Home} />
      <Route exact path={RouteNames.NewItem} component={NewItem} />
    </Switch>
  );
};