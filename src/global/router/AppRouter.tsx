import {  Route, Routes } from "react-router-dom";
import { routesList } from "./index";
export const AppRouter = () => {
  return (
    <Routes>
      {routesList.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element()} />;
      })}
    </Routes>
  );
};
