import React, { Suspense } from "react";

import { JuegoPage } from "./pages/JuegoPage/JuegoPage";
import { PuntuacionPage } from "./pages/PuntuacionPage/PuntuacionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameSelectionPage from "./pages/GameSelectionPage/GameSelectionPage";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/score"
          element={<PuntuacionPage></PuntuacionPage>}
        ></Route>
        <Route
          path="/selection"
          element={<GameSelectionPage></GameSelectionPage>}
        ></Route>
        <Route path="/juego" element={<JuegoPage></JuegoPage>}></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <ErrorPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
