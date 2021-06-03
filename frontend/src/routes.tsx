import React, {lazy, Suspense} from "react";

import {Route} from "react-router-dom";
import {history} from "./internals/RootState";
import {Loading} from "@kiwicom/orbit-components/lib";
import {Links} from "./internals/links";
import {ConnectedRouter} from "connected-react-router/immutable";
import MainSwitch from "./MainSwitch";

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

const NotFoundPage = lazy(() => import("./containers/NotFoundPage"));
const AsyncNotFoundPage = () => (
  <Suspense fallback={<Loading type={"pageLoader"} />}>
    <NotFoundPage />
  </Suspense>
);


export function Routes() {
  return (
    <ConnectedRouter history={history}>
      <MainSwitch>
        <Route exact path={Links.mainPage} component={AsyncMainPage} />
        <Route
          exact
          path={Links.descriptionPage}
          component={AsyncDescriptionPage}
        />
        <Route component={AsyncNotFoundPage} />
      </MainSwitch>
    </ConnectedRouter>
  );
}
