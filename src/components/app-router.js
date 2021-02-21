import React from "react";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} key={path} />
      ))}
    </Switch>
  );
};

export default AppRouter;
