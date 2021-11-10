import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routeConfig from "./route-config";

function Routes(/* {authStore} */) {
  const { routes } = routeConfig;

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          const { component: Component, path, exact } = route;
          return (
            <Route path={path} component={Component} exact={exact} key={i} />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
