import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { routesList } from "./index";
export const AppRouter = () => {
  return (
    <Routes>
      {routesList.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};
