import React, { lazy, Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import { history } from "./internals/RootState";
import { Loading } from "@kiwicom/orbit-components/lib";
import {Links} from "./internals/links";
import {ConnectedRouter} from "connected-react-router/immutable";

const MainPage = lazy(() => import("./containers/MainPage"));

const AsyncMainPage = () => (
  <Suspense fallback={<Loading type={"pageLoader"} />}>
    <MainPage />
  </Suspense>
);

const DescriptionPage = lazy(() => import("./containers/DescriptionPage"));

const AsyncDescriptionPage = () => (
  <Suspense fallback={<Loading type={"pageLoader"} />}>
    <DescriptionPage />
  </Suspense>
);

export function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={Links.mainPage} component={AsyncMainPage} />
        <Route exact path={Links.descriptionPage} component={AsyncDescriptionPage} />
      </Switch>
    </ConnectedRouter>
  );
}
