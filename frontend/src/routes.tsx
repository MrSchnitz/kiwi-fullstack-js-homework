import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./internals/RootState";
import MainPage from "./containers/MainPage";

export function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
      </Switch>
    </ConnectedRouter>
  );
}
