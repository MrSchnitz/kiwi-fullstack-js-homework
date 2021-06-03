import React, { lazy, Suspense } from "react";

import { Route } from "react-router-dom";
import { history } from "./internals/RootState";
import { Links } from "./internals/links";
import { ConnectedRouter } from "connected-react-router/immutable";
import MainSwitch from "./MainSwitch";
import PageLoader from "./components/PageLoader/page-loader.component";

const MainPage = lazy(() => import("./pages/MainPage/main-page.component"));
const AsyncMainPage = () => (
  <Suspense fallback={<PageLoader />}>
    <MainPage />
  </Suspense>
);

const DescriptionPage = lazy(() => import("./pages/DescriptionPage/description-page.component"));
const AsyncDescriptionPage = () => (
  <Suspense fallback={<PageLoader />}>
    <DescriptionPage />
  </Suspense>
);

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/not-found-page.component"));
const AsyncNotFoundPage = () => (
  <Suspense fallback={<PageLoader />}>
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
