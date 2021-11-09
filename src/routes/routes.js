import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routeConfig from "./route-config";

function Routes(/* {authStore} */) {
  const { routes } = routeConfig;

  return (
      <BrowserRouter>
    <Switch>
      {routes.map((route) => {
        const { component: Component, path, exact } = route;
        return <Route path={path} component={Component} exact={exact} />;
      })}
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;