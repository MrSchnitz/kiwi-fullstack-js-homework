import React, { lazy, Suspense } from "react";

import { Route, Switch, useLocation } from "react-router-dom";
import { history } from "./internals/RootState";
import { Loading } from "@kiwicom/orbit-components/lib";
import { Links } from "./internals/links";
import { ConnectedRouter } from "connected-react-router/immutable";
import { AnimatedSwitch, spring } from "react-router-transition";
import { withNavigation } from "./hoc/NavBar";

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

function mapStyles(styles: any) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.translateY}%)`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val: any) {
  return spring(val, {
    stiffness: 300,
    damping: 40,
  });
}

const MainSwitch = withNavigation(() => {
  const location = useLocation();

  return (
    <AnimatedSwitch
      // atEnter={{ opacity: 0 }}
      // atLeave={{ opacity: 0 }}
      // atActive={{ opacity: 1 }}
      atEnter={{
        opacity: 0,
        translateY: location.pathname === Links.mainPage ? -100 : 100,
      }}
      atActive={{ opacity: bounce(1), translateY: bounce(0) }}
      // atLeave={{
      //   opacity: bounce(1),
      //   translateY:
      //     location.pathname === Links.mainPage ? bounce(100) : bounce(-100),
      // }}
      atLeave={{
        opacity: 0,
        translateY:
          location.pathname === Links.mainPage ? bounce(100) : bounce(-100),
      }}
      mapStyles={mapStyles}
      className="switch-wrapper"
    >
      {/*<Switch>*/}
      <Route exact path={Links.mainPage} component={AsyncMainPage} />
      <Route
        exact
        path={Links.descriptionPage}
        component={AsyncDescriptionPage}
      />
      <Route component={AsyncNotFoundPage} />
    </AnimatedSwitch>
  );
});

export function Routes() {
  return (
    <ConnectedRouter history={history}>
      <MainSwitch />
      {/*<AnimatedSwitch*/}
      {/*  atEnter={{ opacity: 0 }}*/}
      {/*  atLeave={{ opacity: 0 }}*/}
      {/*  atActive={{ opacity: 1 }}*/}
      {/*  mapStyles={mapStyles}*/}
      {/*  className="switch-wrapper"*/}
      {/*>*/}
      {/*  /!*<Switch>*!/*/}
      {/*  <Route exact path={Links.mainPage} component={AsyncMainPage} />*/}
      {/*  <Route*/}
      {/*    exact*/}
      {/*    path={Links.descriptionPage}*/}
      {/*    component={AsyncDescriptionPage}*/}
      {/*  />*/}
      {/*  <Route component={AsyncNotFoundPage} />*/}
      {/*</AnimatedSwitch>*/}
      {/*</Switch>*/}
    </ConnectedRouter>
  );
}
