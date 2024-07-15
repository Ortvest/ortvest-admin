import { Route, Routes } from "react-router-dom";
import { routesList } from "./index";
import { useAppSelector } from "../../shared/hooks/redux.hooks";
import { AppRoute } from "../../shared/interfaces/App.interfaces";
import { useEffect, useState } from "react";
export const AppRouter = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  const [_, setRoutesToRender] = useState<AppRoute[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      setRoutesToRender(routesList.filter((route) => route.isProtected));
    } else {
      setRoutesToRender(routesList);
    }
  }, [isAuthenticated]);
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
