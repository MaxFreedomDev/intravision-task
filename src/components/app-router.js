import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { publicRoutes } from "../routes";
import { APPLICATIONS_ROUTE } from "../utils/const";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} key={path} />
      ))}
      <Redirect to={APPLICATIONS_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
