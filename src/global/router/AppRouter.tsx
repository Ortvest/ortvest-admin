import { Route, Routes } from "react-router-dom";
import { routesList } from "./index";
import { AppRoute } from "../../shared/interfaces/App.interfaces";
export const AppRouter = () => {
  return (
    <Routes>
      {routesList.map((route: AppRoute, index: number) => {
        return (
          <Route key={index} path={route.path} element={route.element()} />
        );
      })}
    </Routes>
  );
};
