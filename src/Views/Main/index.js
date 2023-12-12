import Loader from "../Loader/";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import "./index.sass";
const Nav = lazy(() => import("../../Components/Nav"));

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <Nav />
        <Outlet />
      </div>
    </Suspense>
  );
};

export default Main;
