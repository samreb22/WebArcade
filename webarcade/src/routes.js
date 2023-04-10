import React, { Suspense } from "react";
import { JuegoPage } from "./pages/JuegoPage/JuegoPage";
import { PuntuacionPage } from "./pages/PuntuacionPage/PuntuacionPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/puntuacion">
          <PuntuacionPage></PuntuacionPage>
        </Route>
        <Route exact path="/juego">
          <JuegoPage></JuegoPage>
        </Route>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorPage></ErrorPage>
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};
